// @flow
import React from "react";
import { TextForButton } from "../../../../components";
import "./ButtonForOfferIndex.css";

type ButtonForOfferIndexType = {
	callback: () => void,
};

export const ButtonForOfferIndex = ({ callback }: ButtonForOfferIndexType) => {
	return (
		<div className="button-offer-index-wrapper" onClick={callback}>
			<TextForButton text="СДЕЛАТЬ ЗАКАЗ" />
		</div>
	);
};

ButtonForOfferIndex.defaultProps = {
	callback: () => console.log("default callback ButtonForOfferIndex"),
};
