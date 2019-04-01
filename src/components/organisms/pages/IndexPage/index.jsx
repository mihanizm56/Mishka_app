// @flow
import React from "react";
import "./IndexPage.css";
import { AboutBox, ListReviewsBox, ContactBox, WeeklyHitBox, HouseBox } from "../../../molecules";
import { ReviewsProvider, TopItemProvider } from "../../../../containers";

type IndexPagePropTypes = {};

export const IndexPage = (props: IndexPagePropTypes) => {
	// console.log("props in index page");
	// console.log(props);
	return (
		<div className="index-page-wrapper">
			<HouseBox />
			<TopItemProvider component={WeeklyHitBox} />
			<AboutBox />
			<ReviewsProvider component={ListReviewsBox} />
			<ContactBox />
		</div>
	);
};
