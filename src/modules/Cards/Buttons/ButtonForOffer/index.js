// @flow
import React from "react";
import { TextForButton } from "../../../../components";
import "./ButtonForOffer.css";

type ButtonForOfferType = {
	callback: () => void,
};

export const ButtonForOffer = ({ callback }: ButtonForOfferType) => {
	return (
		<div className="button-offer-wrapper" onClick={callback}>
			<TextForButton text="СДЕЛАТЬ ЗАКАЗ" />
		</div>
	);
};

ButtonForOffer.defaultProps = {
	callback: () => console.log("default callback ButtonForOffer"),
};
