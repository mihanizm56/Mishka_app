// @flow
import React from "react";
import { SVGForPage } from "../";
import "./ButtonWithIcon.css";

type ButtonWithIconType = {
	width: string,
	height: string,
	icon: string,
};

export const ButtonWithIcon = ({ width, height, icon, callback }: ButtonWithIconType) => (
	<div onClick={() => callback()} className="button-with-icon" style={{ width: width, height: height }}>
		<SVGForPage icon={icon} />
	</div>
);

ButtonWithIcon.defaultProps = {
	width: "10px",
	height: "10px",
	icon: "",
	callback: () => console.log("default click on ButtonWithIcon"),
};
