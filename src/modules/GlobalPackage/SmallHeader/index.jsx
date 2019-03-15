// @flow
import React, { Component } from "react";
import { BoldParagraph, SVGForPage, ImageForPage, LinkComponent } from "../../../components";
import { UserBasketBox, UnderHeaderBox } from "../../Cards";
import { getHeaderTitle } from "../../../helpers";
import "./SmallHeader.css";

export class SmallHeader extends Component {
	static defaultProps = {
		pageName: "catalog-page",
	};

	constructor() {
		super();
		this.state = {
			isSmallMenuOpened: false,
		};
		this.configForSmallMenuIcon = {
			width: "20px",
			heigth: "14px",
		};
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
					<LinkComponent text="Вазание на заказ" WrappedComponent={BoldParagraph} route="order" />
				</div>
				<div className="small-header__zoom-wrapper">
					<div className="zoom-wrapper__zoom-text">
						<BoldParagraph text="Поиск по сайту" />
						<div className="zoom-wrapper__zoom-icon">
							<SVGForPage icon="zoom" />
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
		const { pageName } = this.props;
		return (
			<div className="small-header-wrapper">
				<div className="small-header__small-header-logo-wrapper">
					<div className="small-header-logo-wrapper__logo-icon">
						<LinkComponent WrappedComponent={SVGForPage} icon="main-logo" route="main" />
					</div>
					<div
						style={{ display: `${isSmallMenuOpened ? "none" : "block"}` }}
						className="small-header-logo-wrapper__menu-icon"
						onClick={this.handleOpenSmallMenu}
					>
						<ImageForPage image="icon-menu" configForImage={this.configForSmallMenuIcon} />
					</div>
					<div
						style={{ display: `${isSmallMenuOpened ? "block" : "none"}` }}
						className="small-header-logo-wrapper__cross-icon"
						onClick={this.handleOpenSmallMenu}
					>
						<ImageForPage image="icon-cross" configForImage={this.configForSmallMenuIcon} />
					</div>
				</div>
				<div className={`small-menu-wrapper${isSmallMenuOpened ? "--opened" : ""}`}>
					{isSmallMenuOpened ? this.showSmallMenu() : null}
				</div>
				{pageName !== "index-page" && (
					<div>
						<UnderHeaderBox text={getHeaderTitle(pageName)} />
					</div>
				)}
			</div>
		);
	}
}
