// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./TextForItems.css";

type TextForItemsProps = {
	text: string,
};

export const TextForItems = ({ text }: TextForItemsProps): Node => <Paragraph text={text} className="text-card" />;
