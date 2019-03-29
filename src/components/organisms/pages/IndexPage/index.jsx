// @flow
import React from "react";
import "./IndexPage.css";
import { connect } from "react-redux";
import { AboutBox, ListReviewsBox, ContactBox, WeeklyHitBox, HouseBox } from "../../boxes";

import {ContainerReviews} from '../../normal/ContainerReviews'

type IndexPagePropTypes = {};

export const IndexPage = (props: IndexPagePropTypes) => {
	// console.log("props in index page");
	// console.log(props);
	const { reviews } = props;
	return (
		<div className="index-page-wrapper">
			<HouseBox />
			<WeeklyHitBox />
			<AboutBox />
			<ContainerReviews component={ListReviewsBox}/>
			<ContactBox />
		</div>
	);
};