//
import React, { memo } from "react";
import { OpenSansText } from "../../texts";
import "./Button.css";

type ButtonPropsType = {
	handleClick: () => void,
	text: string,
	classname: string,
};

export const Button = memo(({ handleClick, text, classname, buttonType }: ButtonPropsType) => {
	return (
		<button className={classname} onClick={handleClick} type={buttonType}>
			{<OpenSansText bold text={text} classname="text-button" />}
		</button>
	);
});

Button.defaultProps = {
	handleClick: () => {},
	text: "default string",
};
