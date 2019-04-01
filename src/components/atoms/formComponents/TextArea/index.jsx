// @flow
import React, { Node } from "react";
import { getClass } from "../../../../utils";
import "./TextArea.css";

type TextAreaProps = {
	placeholder: string,
	width: string,
	height: string,
};

export const TextArea = ({ placeholder, width, height, isError, input }: TextAreaProps): Node => (
	<textarea {...input} className={getClass({ initialClass: "textarea", error: isError })} placeholder={placeholder} />
);

TextArea.defaultProps = {
	placeholder: "default textarea placeholder",
};
