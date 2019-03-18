import React from "react";
import { SVGForPage } from "../";
import { getClass } from "../../../helpers";
import "./InteractiveSVGIcon.css";

export const InteractiveSVGIcon = ({ icon, handleClick, noOpacityChange }) => {
	return (
		<div className={getClass({ initialClass: "interactive-icon-wrapper", noOpacityChange: noOpacityChange })}>
			<SVGForPage icon={icon} />
			<div className="click-wrapper" onClick={handleClick} />
		</div>
	);
};

InteractiveSVGIcon.defaultProps = {
	icon: "",
	handleClick: () => {},
};
