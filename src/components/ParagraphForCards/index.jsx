// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./ParagraphForCards.css";

type ParagraphForCardsProps = {
	text: string,
};

export const ParagraphForCards = ({ text }: ParagraphForCardsProps): Node => (
	<Paragraph text={text} className="paragraph-card" />
);
