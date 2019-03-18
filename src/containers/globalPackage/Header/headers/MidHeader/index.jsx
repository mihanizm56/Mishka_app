// @flow
import React from "react";
import {
	BoldParagraph,
	SVGForPage,
	RegularAdditionalParagraph,
	LinkComponent,
	InteractiveSVGIcon,
	SearchHeaderInput,
} from "../../../../../components";
import { UserBasketBox, UnderHeaderBox } from "../../../../boxes";
import { FONT_SIZE_FOR_SECOND_LINE_IN_HEADER } from "./constants";
import { getHeaderTitle, getSpecialClassForHeader } from "../../../../../helpers";
import "./MidHeader.css";

export const MidHeader = ({ page }) => {
	return (
		<div
			className={getSpecialClassForHeader({
				initialClass: "middle-header-wrapper",
				isIndexPage: page === "index-page",
			})}
		>
			<div className="middle-header__first-line-header">
				<div className="first-line-middle-header__logo">
					<LinkComponent WrappedComponent={InteractiveSVGIcon} icon="main-logo" route="index" />
				</div>
				<div className="middle-header__rigth-container">
					<div className="first-line-middle-header__zoom-wrapper">
						<div className="first-line-middle-header__zoom-icon">
							<InteractiveSVGIcon icon="zoom" />
						</div>
						<div className="first-line-middle-header__search-input">
							<SearchHeaderInput />
						</div>
					</div>
					<div className="first-line-header__basket-wrapper">
						<UserBasketBox />
					</div>
				</div>
			</div>
			<div className="middle-header__second-line-header">
				<div className="middle-header__first-container">
					<div className="second-line-middle-header__catalog-title">
						<LinkComponent
							text="Каталог товаров"
							WrappedComponent={BoldParagraph}
							route="catalog"
							customFontSize={FONT_SIZE_FOR_SECOND_LINE_IN_HEADER}
						/>
					</div>
					<div className="second-line-middle-header__knitting-title">
						<LinkComponent
							text="Вазание на заказ"
							WrappedComponent={BoldParagraph}
							route="orderpage"
							customFontSize={FONT_SIZE_FOR_SECOND_LINE_IN_HEADER}
						/>
					</div>
				</div>
				<div className="middle-header__second-container">
					<div className="second-line-middle-header__delivery-info">
						<RegularAdditionalParagraph text="Бесплатная доставка по России" />
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
};

MidHeader.defaultProps = {
	page: null,
};
