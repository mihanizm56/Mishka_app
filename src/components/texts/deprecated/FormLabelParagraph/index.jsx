// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./FormLabelParagraph.css";

type FormLabelParagraphProps = {
	text: string,
};

export const OpenSansText = ({ text }: FormLabelParagraphProps): Node => (
	<Paragraph text={text} className="title-form-label-paragraph" />
);

OpenSansText.defaultProps = {
	text: "default form title label",
};
