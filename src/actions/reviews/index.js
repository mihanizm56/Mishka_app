// @flow
import { addTheReview } from "../../constants";

export const addReview = value => {
	return {
		type: addTheReview,
		payload: value,
	};
};
