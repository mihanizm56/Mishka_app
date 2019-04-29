import { createSelector } from "reselect";

const getSearchState = state => state.itemsFiltersReducer.searchFilter;

export const searchStateSelector = createSelector(
	[getSearchState],
	state => state
);
