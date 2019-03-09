// @flow
import React, { Node } from "react";
import { InputComponent } from "../";
import "./FormTextInput.css";

type FormTextInputProps = {
	placeholder: string,
};

export const FormTextInput = ({ placeholder, getRef }: FormTextInputProps): Node => (
	<InputComponent placeholder={placeholder} className="form-input" getRef={getRef} />
);

FormTextInput.defaultProps = {
	placeholder: "default form placeholder",
};
