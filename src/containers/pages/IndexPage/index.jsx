// @flow
import React from "react";
import "./IndexPage.css";
import { connect } from "react-redux";
import { AboutBox, ListReviewsBox, ContactBox, WeeklyHitBox, HouseBox } from "../../boxes";

type IndexPagePropTypes = {};

// const mapStateToProps = store => {
// 	return { reviews: store.reviews };   ////// нужна абстрактная сущность ListReviewsBox
// };

// const TestBox = connect(mapStateToProps)(ListReviewsBox);

export const IndexPage = (props: IndexPagePropTypes) => {
	console.log("props in index page");
	console.log(props);
	const { reviews } = props;
	return (
		<div className="index-page-wrapper">
			<HouseBox />
			<WeeklyHitBox />
			<AboutBox />
			<ListReviewsBox />
			<ContactBox />
		</div>
	);
};
