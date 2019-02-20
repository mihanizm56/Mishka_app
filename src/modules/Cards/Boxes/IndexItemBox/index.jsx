// @flow
import React from "react";
import { ParagraphForItemsInTitle, SVGForPage } from "../../../../components";
import "./IndexItemBox.css";

export const IndexItemBox = ({ text, icon }) => {
	return (
		<div className="index-item-box-wrapper">
			<SVGForPage icon={icon} />
			<ParagraphForItemsInTitle text={text} />
		</div>
	);
};
