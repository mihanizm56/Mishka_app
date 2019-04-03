import { createSelector } from "reselect";

const getReviewList = state => state.reviews.reviewList;

export const reviewSelector = createSelector(
	getReviewList,
	reviewList => reviewList
);
