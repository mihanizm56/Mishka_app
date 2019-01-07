import { changeRangeMinValue, changeRangeMaxValue, changeSelectedFilter, changeSearchFilter } from "../../constants";
import { shopItemsToSell } from "../shopItems";
import { findTopPrice } from "../../helpers";

const initialState = {
	rangeMin: 0,
	rangeMax: findTopPrice(shopItemsToSell),
	selectedFilter: null,
	searchFilter: null,
};

export const itemsFilters = (state = initialState, action) => {
	switch (action.type) {
		case changeRangeMinValue:
			console.log("///////////");
			console.log(action.payload);
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
