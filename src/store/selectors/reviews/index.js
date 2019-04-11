import { createSelector } from "reselect";

const getReviewList = state => state.reviews.reviewList;
const getReviewModalState = state => state.reviews.modalReviewsOpen;
const getSendingLoading = state => state.reviews.sendingLoading;
const getSendingSuccess = state => state.reviews.sendingIsSuccess;

export const reviewSelector = createSelector(
	[getReviewList],
	reviewList => reviewList
);

export const modalStateSelector = createSelector(
	[getReviewModalState],
	modalState => modalState
);

export const sendingRequestStateSelector = createSelector(
	[getSendingLoading],
	status => status
);

export const sendingSuccessSelector = createSelector(
	[getSendingSuccess],
	status => status
);
