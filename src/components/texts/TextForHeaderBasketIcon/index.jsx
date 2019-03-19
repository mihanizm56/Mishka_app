// @flow
import React, { Node } from "react";
import { Paragraph } from "..";
import "./TextForHeaderBasketIcon.css";

type TextForHeaderBasketIconProps = {
	text: string,
};

export const TextForHeaderBasketIcon = ({ text }: TextForHeaderBasketIconProps): Node => (
	<Paragraph text={text} className="text-header-basket-icon" />
);

TextForHeaderBasketIcon.defaultProps = {
    text: 'default text'
}