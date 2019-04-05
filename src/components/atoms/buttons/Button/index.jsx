// @flow
import React, { memo } from "react";
import { OpenSansText } from "../../texts";
import "./Button.css";

type ButtonPropsType = {
	handleClick: () => void,
	text: string,
	classname: string,
};

export const Button = memo(({ handleClick, text, classname }: ButtonPropsType) => {
	return (
		<button className={classname} onClick={handleClick}>
			{<OpenSansText bold text={text} classname="text-button" />}
		</button>
	);
});

Button.defaultProps = {
	handleClick: () => {},
	text: "default string",
};
