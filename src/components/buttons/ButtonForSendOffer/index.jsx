// @flow
import React from "react";
import { TextForButton } from "../../../components";
import "./ButtonForSendOffer.css";

type ButtonForSendOfferType = {
	callback: () => void,
};

export const ButtonForSendOffer = ({ callback }: ButtonForSendOfferType) => {
	return (
		<div className="button-send-wrapper" onClick={callback}>
			<TextForButton text="СДЕЛАТЬ ЗАКАЗ" />
		</div>
	);
};

ButtonForSendOffer.defaultProps = {
	callback: () => console.log("default callback ButtonForSendOffer"),
};
