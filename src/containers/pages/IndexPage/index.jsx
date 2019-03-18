import React from "react";
import "./IndexPage.css";
import { AboutBox, ReviewBox, ContactBox, WeeklyHitBox, HouseBox } from "../../boxes";

export const IndexPage = props => {
	//console.log(props.match)
	return (
		<div className="index-page-wrapper">
			<HouseBox />
			<WeeklyHitBox />
			<AboutBox />
			<ReviewBox />
			<ContactBox />
		</div>
	);
};
