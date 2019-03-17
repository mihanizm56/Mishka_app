// @flow
import React from "react";
import { TextForButton } from "../../../components";
import "./ButtonVariable.css";

type styleType = {
	width: string,
	heigth: string,
};

type ButtonVariableType = {
	callback: () => void,
	text: string,
	customStyle?: styleType,
};

export const ButtonVariable = ({ callback, text, customStyle }: ButtonVariableType) => {
	return (
		<div className="button-variable-wrapper" onClick={callback} style={{ ...customStyle }}>
			<TextForButton text={text} />
		</div>
	);
};

ButtonVariable.defaultProps = {
	callback: () => console.log("test click on ButtonVariable"),
	text: "defaultText",
};
