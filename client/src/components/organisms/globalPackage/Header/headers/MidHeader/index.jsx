//
import React, { PureComponent } from "react";
import { VerdanaText, LinkComponent, InteractiveSVGIcon, SearchHeaderInput } from "../../../../../../components";
import { UserBasketBox, UnderHeaderBox, UserLoginBox } from "../../../../../molecules/boxes";
import { FONT_SIZE_FOR_SECOND_LINE_IN_HEADER } from "./constants";
import { getHeaderTitle, getSpecialClassForHeader, getClass } from "../../../../../../utils";
import "./MidHeader.css";

export class MidHeader extends PureComponent {
	static defaultProps = {
		page: "index-page",
	};

	state = {
		searchInputOpened: false,
	};

	handleToggleInput = () => {
		this.setState(prevState => ({ searchInputOpened: !prevState.searchInputOpened }));
	};

	render() {
		const { searchInputOpened } = this.state;
		const {
			page,
			loginState,
			userName,
			openModal,
			signOutFunc,
			numberOfItemsInCart,
			initialPoint,
			changeSearch,
			searchState,
		} = this.props;
		const authProps = {
			loginState,
			userName,
			openModal,
			signOutFunc,
		};
		return (
			<div
				className={getSpecialClassForHeader({
					initialClass: "middle-header-wrapper",
					isIndexPage: page === "index-page",
				})}
			>
				<div className="middle-header__first-line-header" ref={initialPoint}>
					<div className="middle-header-logo-box">
						<div className="first-line-middle-header__logo">
							<LinkComponent WrappedComponent={InteractiveSVGIcon} icon="main-logo" route="index" />
						</div>
						<div className="second-line-midde-header__login-container">
							<UserLoginBox {...authProps} />
						</div>
					</div>
					<div className="middle-header__rigth-container">
						<div className="first-line-middle-header__zoom-wrapper">
							<div className="first-line-middle-header__zoom-icon">
								<InteractiveSVGIcon icon="zoom" handleClick={this.handleToggleInput} />
							</div>
							<div
								className={getClass({
									initialClass: "first-line-middle-header__search-input",
									active: searchInputOpened,
								})}
							>
								<SearchHeaderInput handleChange={changeSearch} value={searchState} />
							</div>
						</div>
						<div className="first-line-header__basket-wrapper">
							<UserBasketBox loginState={loginState} numberOfItems={numberOfItemsInCart} />
						</div>
					</div>
				</div>
				<div className="middle-header__second-line-header">
					<div className="middle-header__first-container">
						<div className="second-line-middle-header__catalog-title">
							<LinkComponent
								text="Каталог товаров"
								WrappedComponent={VerdanaText}
								route="catalog"
								classname="bold-paragraph"
								bold
								inlineStyles={{ fontSize: FONT_SIZE_FOR_SECOND_LINE_IN_HEADER }}
							/>
						</div>
						<div className="second-line-middle-header__knitting-title">
							<LinkComponent
								text="Вязание на заказ"
								WrappedComponent={VerdanaText}
								classname="bold-paragraph"
								bold
								route="orderpage"
								inlineStyles={{ fontSize: FONT_SIZE_FOR_SECOND_LINE_IN_HEADER }}
							/>
						</div>
					</div>
					<div className="middle-header__second-container">
						<div className="second-line-middle-header__delivery-info">
							<VerdanaText text="Бесплатная доставка по России" classname="regular-additional-paragraph" />
						</div>
					</div>
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
