import React from "react";
import { SVGForPage } from "../";
import "./InteractiveSVGIcon.css";

export const InteractiveSVGIcon = ({ icon, handleClick }) => {
	return (
		<div className="interactive-icon-wrapper">
			<SVGForPage icon={icon} />
			<div className="click-wrapper" onClick={handleClick} />
		</div>
	);
};

InteractiveSVGIcon.defaultProps = {
	icon: "",
	handleClick: () => {},
};
