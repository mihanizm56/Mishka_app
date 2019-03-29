// @flow
import React from "react";
import { OpenSansText} from "../../texts";
import "./Button.css";

type ButtonPropsType = {
    handleClick: () => void,
    text: string,
    classname: string
};

export const Button = ({ handleClick, text, classname }: ButtonPropsType) => {
	return (
		<div className={classname} onClick={handleClick}>
			<OpenSansText classname='text-button' bold text={text} />
		</div>
	);
};

Button.defaultProps = {
    handleClick: () => {},
    text: 'default string'
};
