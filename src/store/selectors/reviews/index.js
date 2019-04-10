import { createSelector } from "reselect";

const getReviewList = state => state.reviews.reviewList;
const getReviewModalState = state => state.reviews.modalReviewsState;
const getSendingState = state => state.reviews.sendingState;

export const reviewSelector = createSelector(
	[getReviewList],
	reviewList => reviewList
);

export const modalStateSelector = createSelector(
	[getReviewModalState],
	modalState => modalState
);

export const sendingRequestStateSelector = createSelector(
	[getSendingState],
	status => status
);
