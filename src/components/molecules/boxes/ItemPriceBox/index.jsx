// @flow
import React from "react";
import { VerdanaText } from "../../../../components";
import "./ItemPriceBox.css";

import { IconButton } from "../../../atoms/buttons";

type ItemPriceBoxType = {
	price: number,
};

export const ItemPriceBox = ({ price }: ItemPriceBoxType) => {
	return (
		<div className="item-card__price-box">
			<VerdanaText text={`${price} руб.`} classname="bold-paragraph" bold />
			<IconButton icon="basket" classname="button-wrapped-icon" />
		</div>
	);
};

ItemPriceBox.defaultProps = {
	price: 1000,
};
