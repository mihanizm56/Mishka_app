import React from "react";
import { SVGIcon } from "../";
import { getClass } from "../../../../utils";
import "./InteractiveSVGIcon.css";

export const InteractiveSVGIcon = ({ icon, handleClick, noOpacityChange }) => {
	return (
		<div className={getClass({ initialClass: "interactive-icon-wrapper", noOpacityChange: noOpacityChange })}>
			<SVGIcon icon={icon} />
			<div className="click-wrapper" onClick={handleClick} />
		</div>
	);
};

InteractiveSVGIcon.defaultProps = {
	icon: "",
	handleClick: () => {},
};
