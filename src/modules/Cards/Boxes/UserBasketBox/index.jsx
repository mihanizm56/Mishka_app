import React from "react";
import { SVGForPage, BoldParagraph } from "../../../../components";
import "./UserBasketBox.css";

const getNormalizedItems = value => value;

export const UserBasketBox = ({ numberOfItems }) => {
	return (
		<div className="basket-box-wrapper">
			<div className="basket-box__icon">
				<SVGForPage icon="basket" />
			</div>
			<div className="basket-box__text">
				<BoldParagraph text={`Корзина: ${getNormalizedItems(numberOfItems)}`} />
			</div>
		</div>
	);
};

UserBasketBox.defaultProps = {
	numberOfItems: "пока пуста",
};
