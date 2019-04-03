// @flow
import { addTheReview } from "../../constants";
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { getReviews } from '../../constants'
import { myFetch } from '../../utils/requests'

export const addReview = value => {
	return {
		type: addTheReview,
		payload: value,
	};
};

export const getReviewsAction = (data) => ({
    type: getReviews,
    payload: { ...data }
})

export const fetchReviews = () => dispatch => {
    dispatch(loadingAppAction())
    myFetch('GET', 'localhost:3000/contacts')
        .then(data => dispatch(getReviews(data)))
        .then(dispatch(loadingAppDoneAction()))
};
