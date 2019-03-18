// @flow
import React, { Component } from "react";
import { BoldParagraph, SVGForPage, ImageForPage, LinkComponent, InteractiveSVGIcon } from "../../../../../components";
import { UserBasketBox, UnderHeaderBox } from "../../../../boxes";
import { getHeaderTitle } from "../../../../../helpers";
import { WIDTH_FOR_ICON, HEIGTH_FOR_ICON } from "./constants";
import "./SmallHeader.css";

const configForImage = {
	width: WIDTH_FOR_ICON,
	heigth: HEIGTH_FOR_ICON,
};

export class SmallHeader extends Component {
	static defaultProps = {
		page: "index-page",
	};

	constructor() {
		super();
		this.state = {
			isSmallMenuOpened: false,
		};
	}

	componentDidUpdate(prevProps){
		const {page: prevPage} = this.props;
		const {page: nextPage} = prevProps;
		if(prevPage !== nextPage){
			this.setState({isSmallMenuOpened: false})
		}
	}

	handleOpenSmallMenu = () => {
		this.setState(prevState => ({ isSmallMenuOpened: !prevState.isSmallMenuOpened }));
	};

	showSmallMenu = () => {
		return (
			<>
				<div className="small-header__catalog-title">
					<LinkComponent text="Каталог товаров" WrappedComponent={BoldParagraph} route="catalog" />
				</div>
				<div className="small-header__knitting-title">
					<LinkComponent text="Вазание на заказ" WrappedComponent={BoldParagraph} route="orderpage" />
				</div>
				<div className="small-header__zoom-wrapper">
					<div className="zoom-wrapper__zoom-text">
						<BoldParagraph text="Поиск по сайту" />
						<div className="zoom-wrapper__zoom-icon">
							<InteractiveSVGIcon icon="zoom" />
						</div>
					</div>
				</div>
				<div className="small-header__basket-wrapper">
					<UserBasketBox />
				</div>
			</>
		);
	};

	render() {
		const { isSmallMenuOpened } = this.state;
		const { page } = this.props;
		return (
			<div className="small-header-wrapper">
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
					{isSmallMenuOpened ? this.showSmallMenu() : null}
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
