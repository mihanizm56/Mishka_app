//
import { ADD_THE_REVIEW } from "../../constants";
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import {
	GET_REVIEWS,
	OPEN_MODAL_REVIEW,
	CLOSE_MODAL_REVIEW,
	SET_SENDING_STATE_LOADING,
	SET_SENDING_STATE_DONE,
	SET_SUCCESS_SENDING_STATE_DONE,
	RESET_SUCCESS_SENDING_STATE_DONE
} from "../../constants";
import { myFetch, sleep } from "../../utils/requests";

export const addReviewAction = value => {
	return {
		type: ADD_THE_REVIEW,
		payload: value,
	};
};

export const openModalReviewAction = () => {
	return {
		type: OPEN_MODAL_REVIEW,
	};
};

export const closeModalReviewAction = () => {
	return {
		type: CLOSE_MODAL_REVIEW,
	};
};

export const setSendingStateLoading = () => {
	return {
		type: SET_SENDING_STATE_LOADING,
	};
};

export const setSendingStateDone = () => {
	return {
		type: SET_SENDING_STATE_DONE,
	};
};

export const setSendingStateSuccess = () => {
	return {
		type: SET_SUCCESS_SENDING_STATE_DONE,
	};
};

export const resetSendingStateSuccess = () => {
	return {
		type: RESET_SUCCESS_SENDING_STATE_DONE,
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

export const addReviewRequestAction = value => {
	console.log("check addReviewRequestAction");
	console.log("value", value);
	if (value) {
		return dispatch => {
			dispatch(setSendingStateLoading());

			return sleep()
				.then(() => dispatch(addReviewAction(value)))
				.then(() => dispatch(setSendingStateSuccess()))
				.then(() => dispatch(setSendingStateDone()))
				.then(() => {
					setTimeout(() => {
						dispatch(closeModalReviewAction());
						dispatch(resetSendingStateSuccess())
					}, 2000);
				})
				.catch(error => {
					dispatch(setSendingStateDone());
					alert(error.message);
				});
		};
	}
};
