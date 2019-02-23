import React from "react";
import "./IndexPage.css";
import { AboutBox, ReviewBox } from "../../Cards";

export const IndexPage = props => {
	return (
		<div className="index-page-wrapper">
			<p>IndexPage</p>
			<AboutBox />
			<ReviewBox />
		</div>
	);
};
