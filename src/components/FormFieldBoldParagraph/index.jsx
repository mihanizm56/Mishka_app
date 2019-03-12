// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./FormFieldBoldParagraph.css";

type FormFieldBoldParagraphProps = {
	text: string,
};

export const FormFieldBoldParagraph = ({ text }: FormFieldBoldParagraphProps): Node => (
	<Paragraph text={text} className="form-name-field-label" />
);

FormFieldBoldParagraph.defaultProps = {
	text: "default value",
};
