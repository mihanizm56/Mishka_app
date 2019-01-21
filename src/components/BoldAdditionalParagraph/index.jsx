// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./BoldAdditionalParagraph.css";

type BoldAdditionalParagraphProps = {
	text: string,
};

export const BoldAdditionalParagraph = ({ text }: BoldAdditionalParagraphProps): Node => (
	<Paragraph text={text} className="bold-additional-paragraph" />
);
