import {
	CHANGE_RANGE_MIN_VALUE,
	CHANGE_RANGE_MAX_VALUE,
	CHANGE_SELECTED_FILTER,
	CHANGE_SEARCH_FILTER,
} from "../../constants";

const initialState = {
	rangeMin: null,
	rangeMax: null,
	selectedFilter: "",
	searchFilter: "",
};

export const itemsFilters = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_RANGE_MIN_VALUE:
			return { ...state, rangeMin: action.payload };
		case CHANGE_RANGE_MAX_VALUE:
			return { ...state, rangeMax: action.payload };
		case CHANGE_SELECTED_FILTER:
			return { ...state, selectedFilter: action.payload };
		case CHANGE_SEARCH_FILTER:
			return { ...state, searchFilter: action.payload };

		default:
			return state;
	}
};
