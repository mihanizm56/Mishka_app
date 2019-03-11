// @flow
import React, { Node } from "react";
import "./TextAreaFormComponent.css";

type TextAreaProps = {
	placeholder: string,
	width: string,
	height: string,
};

export const TextAreaFormComponent = ({ placeholder, width, height }: TextAreaProps): Node => (
	<textarea style={{ width: height, height: height }} className="textarea" placeholder={placeholder} />
);

TextAreaFormComponent.defaultProps = {
	placeholder: "default textarea placeholder",
	width: "200px",
	height: "100px",
};
