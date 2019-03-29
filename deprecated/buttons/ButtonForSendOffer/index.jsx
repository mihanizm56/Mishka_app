// @flow
import React from "react";
import { OpenSansText} from "../../../components";
import "./ButtonForSendOffer.css";

type ButtonForSendOfferType = {
	callback: () => void,
};

export const ButtonForSendOffer = ({ callback }: ButtonForSendOfferType) => {
	return (
		<div className="button-send-wrapper" onClick={callback}>
			<OpenSansText classname='text-button' bold text="ОТПРАВИТЬ ЗАКАЗ" />
		</div>
	);
};

ButtonForSendOffer.defaultProps = {
	callback: () => {},
};
