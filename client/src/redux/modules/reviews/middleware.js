import {
	addReviewAction,
	openModalReviewAction,
	closeModalReviewAction,
	setSendingStateLoading,
	setSendingStateDone,
	setSendingStateSuccess,
	resetSendingStateSuccess,
	getReviewsAction,
} from "./actions";
import { sleep } from "../../../utils/requests";
import { loadingAppAction, loadingAppDoneAction } from "../appLoading";

const DEFAULT_REVIEWS = [
	{
		text: "Нет данных",
		user: "Нет данных",
		login: "Нет данных",
	},
];

export const fetchReviewsAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetch("/data/reviews")
		.then(data => data.json())
		.then(data => dispatch(getReviewsAction(data.reviews)))
		.then(dispatch(loadingAppDoneAction()))
		.catch(error => console.warn(error) || dispatch(getReviewsAction(DEFAULT_REVIEWS)));
};

export const addReviewRequestAction = value => {
	// console.log("check addReviewRequestAction");
	// console.log("value", value);
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
						dispatch(resetSendingStateSuccess());
					}, 2000);
				})
				.catch(error => {
					dispatch(setSendingStateDone());
					alert(error.message);
				});
		};
	}
};
