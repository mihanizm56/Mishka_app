import React from "react";
import "./IndexPage.css";
import { AboutBox, ReviewBox, ContactBox, WeeklyHitBox } from "../../Cards";

export const IndexPage = props => {
	return (
		<div className="index-page-wrapper">
			<WeeklyHitBox />
			<AboutBox />
			<ReviewBox />
			<ContactBox />
		</div>
	);
};
