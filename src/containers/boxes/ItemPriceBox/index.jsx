// @flow
import React from "react";
import { VerdanaText } from "../../../components";
import { ButtonWrappedIcon } from "../../../components";
import "./ItemPriceBox.css";

type ItemPriceBoxType = {
	price: number,
};

export const ItemPriceBox = ({ price }: ItemPriceBoxType) => {
	return (
		<div className="item-card__price-box">
			<VerdanaText text={`${price} руб.`} classname='bold-paragraph' bold/>
			<ButtonWrappedIcon icon="basket" />
		</div>
	);
};

ItemPriceBox.defaultProps = {
	price: 1000,
};
