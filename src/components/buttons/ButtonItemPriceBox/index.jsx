// @flow
import React from "react";
import { InteractiveSVGIcon } from "../../../components";

type ButtonItemPriceBoxType = {
	callback: () => void,
};

export const ButtonItemPriceBox = ({ callback }: ButtonItemPriceBoxType) => {
	return <InteractiveSVGIcon icon="basket" handleClick={callback} />;
};

ButtonItemPriceBox.defaultProps = {
	callback: () => console.log("click on ButtonItemPriceBox"),
};
