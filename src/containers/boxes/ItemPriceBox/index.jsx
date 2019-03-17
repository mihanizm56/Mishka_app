// @flow
import React from "react";
import { BoldParagraph } from "../../../components";
import { ButtonItemPriceBox } from "../../../components";
import "./ItemPriceBox.css";

type ItemPriceBoxType = {
	price: number,
};

export const ItemPriceBox = ({ price }: ItemPriceBoxType) => {
	return (
		<div className="item-card__price-box">
			<BoldParagraph text={`${price} руб.`} />
			<ButtonItemPriceBox />
		</div>
	);
};

ItemPriceBox.defaultProps = {
	price: 1000,
};
