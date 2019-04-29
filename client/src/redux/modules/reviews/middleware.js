export const fetchReviewsAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetch("/data/reviews")
		.then(data => (data.status !== 200 ? null : data))
		.then(data => (data ? data.json() : null))
		.then(data => (data ? dispatch(getReviewsAction(data.reviews)) : dispatch(getReviewsAction([]))))
		.then(dispatch(loadingAppDoneAction()));
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
