// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./FormAdditionalParagraph.css";

type FormAdditionalParagraphProps = {
	text: string,
};

export const FormAdditionalParagraph = ({ text }: FormAdditionalParagraphProps): Node => (
	<Paragraph text={text} className="form-additional-paragraph" />
);

FormAdditionalParagraph.defaultProps = {
	text: "default value",
};
