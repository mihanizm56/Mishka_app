// @flow
import React, { PureComponent } from "react";
import {
	BoldParagraph,
	SVGForPage,
	BoldAdditionalParagraph,
	RegularAdditionalParagraph,
	LinkComponent,
	InteractiveSVGIcon,
	SearchHeaderInput,
} from "../../../../../components";
import { UserBasketBox, UnderHeaderBox } from "../../../../boxes";
import { getHeaderTitle, getSpecialClassForHeader, getClass } from "../../../../../helpers";
import "./BigHeader.css";

export class BigHeader extends PureComponent {
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
		const { page } = this.props;
		console.log("//////////////////////");
		console.log("получил страницу ", page);
		return (
			<div
				className={getSpecialClassForHeader({
					initialClass: "big-header-wrapper",
					isIndexPage: page === "index-page",
				})}
			>
				<div className="big-header__first-line-big-header">
					<div className="first-line-big-header__catalog-title">
						<LinkComponent text="Каталог товаров" WrappedComponent={BoldParagraph} route="catalog" />
					</div>
					<div className="first-line-big-header__knitting-title">
						<LinkComponent text="Вазание на заказ" WrappedComponent={BoldParagraph} route="orderpage" />
					</div>
					<div className="first-line-big-header__logo">
						<LinkComponent WrappedComponent={InteractiveSVGIcon} icon="main-logo" route="index" />
					</div>
					<div className="first-line-big-header__zoom-wrapper">
						<div className="first-line-big-header__zoom-icon">
							<InteractiveSVGIcon icon="zoom" handleClick={this.handleToggleInput} />
						</div>
						<div
							className={getClass({ initialClass: "first-line-big-header__search-input", active: searchInputOpened })}
						>
							<SearchHeaderInput />
						</div>
					</div>
					<div className="first-line-big-header__basket-wrapper">
						<UserBasketBox />
					</div>
				</div>
				<div className="big-header__second-line-header">
					<div className="second-line-big-header__new-items">
						<BoldAdditionalParagraph text="Новые поступления" />
					</div>
					<div className="second-line-big-header__discount">
						<BoldAdditionalParagraph text="Распродажа" />
					</div>
					<div className="second-line-big-header__delivery-info">
						<RegularAdditionalParagraph text="Бесплатная доставка по России" />
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
