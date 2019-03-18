// @flow
import React from "react";
import { InteractiveSVGIcon } from "../../svgComponents";
import "./ButtonWrappedIcon.css";

type ButtonWrappedIconType = {
	width: string,
	height: string,
	icon: string,
};

export const ButtonWrappedIcon = ({ width, height, icon, callback, noOpacityChange }: ButtonWrappedIconType) => (
	<div onClick={() => callback()} className="button-wrapped-icon" style={{ width: width, height: height }}>
		<InteractiveSVGIcon icon={icon} noOpacityChange={noOpacityChange} />
	</div>
);

ButtonWrappedIcon.defaultProps = {
	width: "10px",
	height: "10px",
	icon: "",
	callback: () => console.log("default click on ButtonWrappedIcon"),
};
