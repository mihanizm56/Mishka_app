// @flow
import React from "react";
import { TextForButton } from "../../../components";
import "./ButtonForOffer.css";

type ButtonForOfferType = {
	callback: () => void,
	text: string,
};

export const ButtonForOffer = ({ callback, text }: ButtonForOfferType) => {
	return (
		<div className="button-offer-wrapper" onClick={callback}>
			<TextForButton text={text} />
		</div>
	);
};

ButtonForOffer.defaultProps = {
	callback: () => {},
	text: "СДЕЛАТЬ ЗАКАЗ",
};
