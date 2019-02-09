import React, { Component } from "react";
import { BoldParagraph, SVGForPage, LinkComponent } from "../../../components";
import { UserBasketBox } from "../../Cards";
import "./SmallHeader.css";

export class SmallHeader extends Component {
	state = {
		isSmallMenuOpened: false,
	};

	handleOpenSmallMenu = () => this.setState(prevState => ({ isSmallMenuOpened: !prevState.isSmallMenuOpened }));

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
					<div className="zoom-wrapper__zoom-icon">
						<SVGForPage icon="zoom" />
					</div>
					<div className="zoom-wrapper__zoom-text">
						<BoldParagraph text="Поиск по сайту" />
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
		return (
			<div className="small-header-wrapper">
				<div className="small-header__small-header-logo-wrapper">
					<div className="small-header-logo-wrapper__logo-icon">
						<LinkComponent WrappedComponent={SVGForPage} icon="main-logo" route="main" />
					</div>
					<div className="small-header-logo-wrapper__menu-icon" onClick={this.handleOpenSmallMenu}>
						<SVGForPage icon={isSmallMenuOpened ? "cross" : "menu"} />
					</div>
				</div>
				{isSmallMenuOpened ? this.showSmallMenu() : null}
			</div>
		);
	}
}
