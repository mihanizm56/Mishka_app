// @flow
import React from "react";
import { ButtonWithIcon } from "../../../../components";

type ButtonItemPriceBoxType = {
	callback: () => void,
};

export const ButtonItemPriceBox = ({ callback }: ButtonItemPriceBoxType) => {
	return <ButtonWithIcon icon="basket" width="24px" height="24px" />;
};

ButtonItemPriceBox.defaultProps = {
	callback: () => console.log("click on ButtonItemPriceBox"),
};
