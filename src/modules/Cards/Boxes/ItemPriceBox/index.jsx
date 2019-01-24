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
			<ButtonWithIcon className='test' icon="basket" width="24px" height="24px" />
		</div>
	);
};

ItemPriceBox.defaultProps = {
	price: 1000,
}