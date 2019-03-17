// @flow
import React, { Node } from "react";
import { getClass } from "../../../helpers";
import "./TextAreaFormComponent.css";

type TextAreaProps = {
	placeholder: string,
	width: string,
	height: string,
};

export const TextAreaFormComponent = ({ placeholder, width, height, isError }: TextAreaProps): Node => (
	<textarea className={getClass({ initialClass: "textarea", error: isError })} placeholder={placeholder} />
);

TextAreaFormComponent.defaultProps = {
	placeholder: "default textarea placeholder",
};
