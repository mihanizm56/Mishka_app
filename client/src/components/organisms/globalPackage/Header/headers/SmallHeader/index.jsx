//
import React, { PureComponent } from "react";
import {
	ImageForPage,
	LinkComponent,
	InteractiveSVGIcon,
	SearchHeaderInput,
	VerdanaText,
} from "../../../../../../components";
import { UserBasketBox, UnderHeaderBox, UserLoginBox } from "../../../../../molecules/boxes";
import { getHeaderTitle, getClass } from "../../../../../../utils";
import { WIDTH_FOR_ICON, HEIGTH_FOR_ICON } from "./constants";
import "./SmallHeader.css";

const configForImage = {
	width: WIDTH_FOR_ICON,
	heigth: HEIGTH_FOR_ICON,
};

export class SmallHeader extends PureComponent {
	static defaultProps = {
		page: "index-page",
	};

	static getDerivedStateFromProps({ smallMenuIsClosed }) {
		return smallMenuIsClosed ? { isSmallMenuOpened: false } : null;
	}

	constructor() {
		super();
		this.state = {
			isSmallMenuOpened: false,
			searchInputOpened: false,
		};
	}

	componentDidUpdate(prevProps) {
		const { page: prevPage, searchState } = this.props;
		const { page: nextPage } = prevProps;
		if (prevPage !== nextPage && !searchState) {
			this.setState({ isSmallMenuOpened: false, searchInputOpened: false });
		}
	}

	handleOpenSmallMenu = () => {
		this.setState(prevState => ({ isSmallMenuOpened: !prevState.isSmallMenuOpened }));
	};

	handleToggleInput = () => {
		const { changeSearch } = this.props;
		if (!this.state.searchInputOpened) {
			changeSearch("");
		}

		this.setState(prevState => ({ searchInputOpened: !prevState.searchInputOpened }));
	};

	getSearchItem = searchInputOpened => {
		const { changeSearch, searchState } = this.props;
		return searchInputOpened ? (
			<div
				className={getClass({
					initialClass: "first-line-small-header__search-input",
					active: searchInputOpened,
				})}
			>
				<SearchHeaderInput handleChange={changeSearch} value={searchState} />
			</div>
		) : (
			<VerdanaText text="Поиск по сайту" bold classname="bold-paragraph" />
		);
	};

	showSmallMenu = (searchInputOpened, authProps, numberOfItemsInCart, loginState) => {
		return (
			<>
				<div className="small-header__catalog-title">
					<LinkComponent
						text="Каталог товаров"
						WrappedComponent={VerdanaText}
						classname="bold-paragraph"
						bold
						route="catalog"
					/>
				</div>
				<div className="small-header__knitting-title">
					<LinkComponent
						text="Вазание на заказ"
						WrappedComponent={VerdanaText}
						bold
						classname="bold-paragraph"
						route="orderpage"
					/>
				</div>
				<div className="small-header__zoom-wrapper">
					<div className="zoom-wrapper__zoom-text">
						<div className="zoom-wrapper__zoom-icon">
							<InteractiveSVGIcon icon="zoom" handleClick={this.handleToggleInput} />
						</div>
						{this.getSearchItem(searchInputOpened)}
					</div>
				</div>
				<div className="small-header__basket-wrapper">
					<UserBasketBox numberOfItems={numberOfItemsInCart} loginState={loginState} />
				</div>
				<div className="small-header__login-container">
					<UserLoginBox {...authProps} loginState={loginState} />
				</div>
			</>
		);
	};

	render() {
		const { isSmallMenuOpened, searchInputOpened } = this.state;
		const { page, loginState, userName, openModal, signOutFunc, initialPoint, numberOfItemsInCart } = this.props;
		const authProps = {
			loginState,
			userName,
			openModal,
			signOutFunc,
		};

		return (
			<div className="small-header-wrapper" ref={initialPoint}>
				<div className="small-header__small-header-logo-wrapper">
					<div className="small-header-logo-wrapper__logo-icon">
						<LinkComponent WrappedComponent={InteractiveSVGIcon} icon="main-logo" route="index" />
					</div>
					<div
						style={{ display: `${isSmallMenuOpened ? "none" : "block"}` }}
						className="small-header-logo-wrapper__menu-icon"
						onClick={this.handleOpenSmallMenu}
					>
						<ImageForPage image="icon-menu" configForImage={configForImage} />
					</div>
					<div
						style={{ display: `${isSmallMenuOpened ? "block" : "none"}` }}
						className="small-header-logo-wrapper__cross-icon"
						onClick={this.handleOpenSmallMenu}
					>
						<ImageForPage image="icon-cross" configForImage={configForImage} />
					</div>
				</div>
				<div className={`small-menu-wrapper${isSmallMenuOpened ? "--opened" : ""}`}>
					{isSmallMenuOpened ? this.showSmallMenu(searchInputOpened, authProps, numberOfItemsInCart, loginState) : null}
				</div>
				{page !== "index-page" && (
					<div>
						<UnderHeaderBox text={getHeaderTitle(page)} />
					</div>
				)}
			</div>
		);
	}
}
