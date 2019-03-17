// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./ParagraphForItemsInTitle.css";

type ParagraphForItemsInTitleProps = {
	text: string,
};

export const ParagraphForItemsInTitle = ({ text }: ParagraphForItemsInTitleProps): Node => (
	<Paragraph text={text} className="paragraph-index-items" />
);
