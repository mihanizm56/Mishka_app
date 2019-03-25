// @flow
import React from "react";
import { InteractiveSVGIcon } from "../../svgComponents";
import "./ButtonWrappedIcon.css";

type ButtonWrappedIconType = {
	width?: string,
	height?: string,
	icon: string,
	handleClick: ()=> void,
	noOpacityChange: boolean
};

export const ButtonWrappedIcon = ({ width, height, icon, handleClick, noOpacityChange }: ButtonWrappedIconType) => (
	<div onClick={handleClick} className="button-wrapped-icon" style={width&&height ? { width: width, height: height } : null}>
		<InteractiveSVGIcon icon={icon} noOpacityChange={noOpacityChange} handleClick={handleClick} />
	</div>
);

ButtonWrappedIcon.defaultProps = {
	icon: "no icon",
	handleClick: () => console.log("default click on ButtonWrappedIcon"),
	noOpacityChange: false
};
