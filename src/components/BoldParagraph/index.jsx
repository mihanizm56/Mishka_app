// @flow
import React, { Node } from "react";
import { Paragraph } from "..";
import "./BoldParagraph.css";

type BoldParagraphProps = {
	text: string,
};

export const BoldParagraph = ({ text }: BoldParagraphProps): Node => (
	<Paragraph text={text} className="bold-paragraph" />
);
