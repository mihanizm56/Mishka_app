// @flow
import React from "react";
import { OpenSansText} from "../../../components";
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
			<OpenSansText classname='text-button' bold  text={text} />
		</div>
	);
};

ButtonVariable.defaultProps = {
	callback: () => {},
	text: "defaultText",
};
