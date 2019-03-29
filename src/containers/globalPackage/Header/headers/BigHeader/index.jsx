// @flow
import React, { PureComponent } from "react";
import {
	SVGIcon,
	LinkComponent,
	InteractiveSVGIcon,
	SearchHeaderInput,
	VerdanaText
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
						<LinkComponent text="Каталог товаров" WrappedComponent={VerdanaText} classname='bold-paragraph' bold route="catalog" />
					</div>
					<div className="first-line-big-header__knitting-title">
						<LinkComponent text="Вазание на заказ" WrappedComponent={VerdanaText} bold classname='bold-paragraph' route="orderpage" />
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
						<VerdanaText text="Новые поступления" classname='regular-additional-paragraph'/>
					</div>
					<div className="second-line-big-header__discount">
						<VerdanaText text="Распродажа" classname='regular-additional-paragraph'/>
					</div>
					<div className="second-line-big-header__delivery-info">
						<VerdanaText text="Бесплатная доставка по России" classname='regular-additional-paragraph'/>
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
