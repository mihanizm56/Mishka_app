// @flow
import React from "react";
import { InteractiveSVGIcon } from "../../svgComponents";
import "./ButtonWrappedIcon.css";

type ButtonWrappedIconType = {
	width: string,
	height: string,
	icon: string,
};

export const ButtonWrappedIcon = ({ width, height, icon, handleClick, noOpacityChange }: ButtonWrappedIconType) => (
	<div onClick={handleClick} className="button-wrapped-icon" style={{ width: width, height: height }}>
		<InteractiveSVGIcon icon={icon} noOpacityChange={noOpacityChange} />
	</div>
);

ButtonWrappedIcon.defaultProps = {
	width: "10px",
	height: "10px",
	icon: "",
	handleClick: () => console.log("default click on ButtonWrappedIcon"),
};
