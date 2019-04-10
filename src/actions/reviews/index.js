//
import { ADD_THE_REVIEW } from "../../constants";
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { GET_REVIEWS, OPEN_MODAL_REVIEW, CLOSE_MODAL_REVIEW, SET_SENDING_STATE } from "../../constants";
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

export const setSendingStateAction = value => {
	return {
		type: SET_SENDING_STATE,
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

// export const addReviewRequestAction = (review, name, login) => {
// 	if (review && name && login) {
// 		return dispatch => {
// 			dispatch(loadingAppAction());

// 			return sleep
// 				.then(() => dispatch(loginCorrectAction()))
// 				.then(() => dispatch(loadingAppDoneAction()))
// 				.then(() => {
// 					setTimeout(() => {
// 						dispatch(closeAuthModalAction());
// 					}, 2000);
// 				})
// 				.then(() => dispatch(setUserName(name)))
// 				.catch(error => {
// 					dispatch(loadingAppDoneAction());
// 					alert(error.message);
// 				});
// 		};
// 	}
// };
