//
import { ADD_THE_REVIEW } from "../../constants";
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { GET_REVIEWS, OPEN_MODAL_REVIEW } from "../../constants";
import { myFetch } from "../../utils/requests";

export const addReview = value => {
	return {
		type: ADD_THE_REVIEW,
		payload: value,
	};
};

export const openModalReview = value => {
	return {
		type: OPEN_MODAL_REVIEW,
		payload: value,
	};
};

export const getReviews = data => ({
	type: GET_REVIEWS,
	payload: { ...data },
});

export const fetchReviews = () => dispatch => {
	dispatch(loadingAppAction());
	myFetch("GET", "localhost:3000/contacts")
		.then(data => dispatch(getReviews(data)))
		.then(dispatch(loadingAppDoneAction()));
};
