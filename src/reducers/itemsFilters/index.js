import { changeRangeMinValue, changeRangeMaxValue, changeSelectedFilter, changeSearchFilter } from "../../constants";

const initialState = {
	rangeMin: null,
	rangeMax: null,
	selectedFilter: "",
	searchFilter: null,
};

export const itemsFilters = (state = initialState, action) => {
	switch (action.type) {
		case changeRangeMinValue:
			return { ...state, rangeMin: action.payload };
		case changeRangeMaxValue:
			return { ...state, rangeMax: action.payload };
		case changeSelectedFilter:
			return { ...state, selectedFilter: action.payload };
		case changeSearchFilter:
			return { ...state, searchFilter: action.payload };

		default:
			return state;
	}
};
