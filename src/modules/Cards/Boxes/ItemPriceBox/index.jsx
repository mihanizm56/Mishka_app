// @flow
import React from "react";
import { ButtonWithIcon, BoldParagraph } from "../../../../components";
import "./ItemPriceBox.css";

type ItemPriceBoxType = {
	price: number,
};

export const ItemPriceBox = ({ price }: ItemPriceBoxType) => {
	return (
		<div className="item-card__price-box">
			<BoldParagraph text={`${price} руб.`} />
			<ButtonWithIcon icon="basket" width="100px" height="100px" />
		</div>
	);
};
