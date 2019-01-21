// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./TextForButton.css";

type TextForButtonProps = {
	text: string,
};

export const TextForButton = ({ text }: TextForButtonProps): Node => <Paragraph text={text} className="text-button" />;
