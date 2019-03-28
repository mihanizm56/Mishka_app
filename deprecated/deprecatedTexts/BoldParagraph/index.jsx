// @flow
import React, { Node } from "react";
import { Paragraph } from "..";
import "./BoldParagraph.css";

type BoldParagraphProps = {
	text: string,
};

export const BoldParagraph = ({ text, customFontSize }: BoldParagraphProps): Node => (
	<Paragraph text={text} customFontSize={customFontSize} className="bold-paragraph" />
);
