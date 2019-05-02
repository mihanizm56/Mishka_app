//
import React, { memo } from "react";
import { VerdanaText } from "../../../../components";
import "./ItemPriceBox.css";

import { IconButton } from "../../../atoms/buttons";

type ItemPriceBoxType = {
	price: number,
};

export const ItemPriceBox = memo(({ price, handleClick }: ItemPriceBoxType) => {
	return (
		<div className="item-card__price-box">
			<VerdanaText text={`${price} руб.`} classname="bold-paragraph" bold />
			<IconButton icon="basket" classname="button-wrapped-icon" handleClick={handleClick} />
		</div>
	);
});

ItemPriceBox.defaultProps = {
	price: 1000,
	handleClick: () => console.log("default handleClick"),
};
