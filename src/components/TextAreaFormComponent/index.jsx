// @flow
import React, { Node } from "react";
import "./TextAreaFormComponent.css";

type TextAreaProps = {
	placeholder: string,
	width: string,
	height: string,
};

export const TextAreaFormComponent = ({ placeholder, width, height }: TextAreaProps): Node => (
	<textarea className="textarea" placeholder={placeholder} />
);

TextAreaFormComponent.defaultProps = {
	placeholder: "default textarea placeholder",
};
