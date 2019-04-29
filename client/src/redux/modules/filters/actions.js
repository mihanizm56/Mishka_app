import {
	CHANGE_RANGE_MIN_VALUE,
	CHANGE_RANGE_MAX_VALUE,
	CHANGE_SELECTED_FILTER,
	CHANGE_SEARCH_FILTER,
} from "../../constants";

export const selectFilterAction = value => {
	return {
		type: CHANGE_SELECTED_FILTER,
		payload: value,
	};
};

export const changeRangeMinAction = number => {
	return {
		type: CHANGE_RANGE_MIN_VALUE,
		payload: number,
	};
};

export const changeRangeMaxAction = number => {
	return {
		type: CHANGE_RANGE_MAX_VALUE,
		payload: number,
	};
};

export const changeSearchFieldAction = value => {
	return {
		type: CHANGE_SEARCH_FILTER,
		payload: value,
	};
};
