//
import React, { memo } from "react";
import "./IndexPage.css";
import { AboutBox, ListReviewsBox, ContactBox, WeeklyHitBox, HouseBox } from "../../../molecules";
import { ReviewsProvider, TopItemProvider, ShopContactsProvider } from "../../../../containers";

type IndexPagePropTypes = {};

export const IndexPage = memo((props: IndexPagePropTypes) => {
	return (
		<div className="index-page-wrapper">
			<HouseBox />
			<TopItemProvider component={WeeklyHitBox} />
			<AboutBox />
			<ReviewsProvider component={ListReviewsBox} />
			<ShopContactsProvider component={ContactBox} />
		</div>
	);
});
