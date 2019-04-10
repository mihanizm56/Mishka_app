//
import React, { memo } from "react";
import "./IndexPage.css";
import { AboutBox, ListReviewsBox, ContactBox, WeeklyHitBox, HouseBox } from "../../../molecules";
import { ReviewsStoreProvider, TopItemProvider, ShopContactsProvider } from "../../../../containers";

type IndexPagePropTypes = {};

export const IndexPage = memo((props: IndexPagePropTypes) => {
	return (
		<div className="index-page-wrapper">
			<HouseBox />
			<TopItemProvider component={WeeklyHitBox} />
			<AboutBox />
			<ReviewsStoreProvider>
				<ListReviewsBox />
			</ReviewsStoreProvider>
			/>
			<ShopContactsProvider component={ContactBox} />
		</div>
	);
});
