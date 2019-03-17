// @flow
import React from "react";
import { TextForButton } from "../../../components";
import "./ButtonForMadeOffer.css";

type ButtonForMadeOfferType = {
	callback: () => void,
};

export const ButtonForMadeOffer = ({ callback }: ButtonForMadeOfferType) => {
	return (
		<div className="button-offer-wrapper" onClick={callback}>
			<TextForButton text="СДЕЛАТЬ ЗАКАЗ" />
		</div>
	);
};

ButtonForMadeOffer.defaultProps = {
	callback: () => console.log("default callback ButtonForMadeOffer"),
};
