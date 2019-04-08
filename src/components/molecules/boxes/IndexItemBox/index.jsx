//
import React, { memo } from "react";
import { SVGIcon, VerdanaText } from "../../../../components";
import "./IndexItemBox.css";

export const IndexItemBox = memo(({ text, icon }) => {
	return (
		<div className="index-item-box-wrapper">
			<SVGIcon icon={icon} />
			<VerdanaText text={text} classname="paragraph-index-items" bold />
		</div>
	);
});

IndexItemBox.defaultProps = {
	text: "default item text",
	icon: "no-icon",
};
