// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./GreenCardParagraph.css";

type GreenCardParagraphProps = {
	text: string,
};

export const GreenCardParagraph = ({ text }: GreenCardParagraphProps): Node => (
	<Paragraph text={text} className="green-card-paragraph" />
);
