// @flow
import { changeRangeMinValue, changeRangeMaxValue, changeSelectedFilter, changeSearchFilter } from "../../constants";

export const selectFilterAction = value => {
	return {
		type: changeSelectedFilter,
		payload: value,
	};
};

export const changeRangeMinAction = number => {
	return {
		type: changeRangeMinValue,
		payload: number,
	};
};

export const changeRangeMaxAction = number => {
	return {
		type: changeRangeMaxValue,
		payload: number,
	};
};

export const changeSearchFieldAction = value => {
	return {
		type: changeSearchFilter,
		payload: value,
	};
};
