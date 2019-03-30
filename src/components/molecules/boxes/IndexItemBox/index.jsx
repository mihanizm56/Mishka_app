// @flow
import React from "react";
import { ParagraphForItemsInTitle, SVGIcon, VerdanaText } from "../../../../components";
import "./IndexItemBox.css";

export const IndexItemBox = ({ text, icon }) => {
	return (
		<div className="index-item-box-wrapper">
			<SVGIcon icon={icon} />
			<VerdanaText text={text} classname='paragraph-index-items' bold/>
		</div>
	);
};

IndexItemBox.defaultProps = {
	text:'default item text',
	icon:'no-icon'
}