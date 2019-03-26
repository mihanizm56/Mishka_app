// @flow
import React from "react";
import { OpenSansText } from "../../../components";
import "./ButtonForOffer.css";

type ButtonForOfferType = {
	callback: () => void,
	text: string,
};

export const ButtonForOffer = ({ callback, text }: ButtonForOfferType) => {
	return (
		<div className="button-offer-wrapper" onClick={callback}>
			<OpenSansText classname='text-button' bold text={text} />
		</div>
	);
};

ButtonForOffer.defaultProps = {
	callback: () => {},
	text: "СДЕЛАТЬ ЗАКАЗ",
};
