// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./RegularAdditionalParagraph.css";

type RegularAdditionalParagraphProps = {
	text: string,
};

export const RegularAdditionalParagraph = ({ text }: RegularAdditionalParagraphProps): Node => (
	<Paragraph text={text} className="regular-additional-paragraph" />
);
