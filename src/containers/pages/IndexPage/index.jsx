// @flow
import React from "react";
import "./IndexPage.css";
import { AboutBox, ListReviewsBox, ContactBox, WeeklyHitBox, HouseBox } from "../../boxes";

type IndexPagePropTypes = {};

export const IndexPage = (props: IndexPagePropTypes) => {
	console.log("props in index page");
	console.log(props);
	const { reviews } = props;
	return (
		<div className="index-page-wrapper">
			<HouseBox />
			<WeeklyHitBox />
			<AboutBox />
			<ListReviewsBox reviews={reviews} />
			<ContactBox />
		</div>
	);
};
