import React from "react";
import {
	BoldParagraph,
	SVGForPage,
	BoldAdditionalParagraph,
	RegularAdditionalParagraph,
	LinkComponent,
	InteractiveSVGIcon,
} from "../../../components";
import { UserBasketBox, UnderHeaderBox } from "../../boxes";
import { getHeaderTitle, getSpecialClassForHeader } from "../../../helpers";
import "./BigHeader.css";

export const BigHeader = ({ pageName }) => {
	return (
		<div
			className={getSpecialClassForHeader({
				initialClass: "big-header-wrapper",
				isIndexPage: pageName === "index-page",
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
						<InteractiveSVGIcon icon="zoom" />
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
			{pageName !== "index-page" && (
				<div>
					<UnderHeaderBox text={getHeaderTitle(pageName)} />
				</div>
			)}
		</div>
	);
};

BigHeader.defaultProps = {
	pageName: "index-page",
};
