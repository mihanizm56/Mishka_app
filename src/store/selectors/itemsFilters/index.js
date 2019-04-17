import { createSelector } from "reselect";

const getSearchState = state => state.itemsFilters.searchFilter;

export const searchStateSelector = createSelector(
	[getSearchState],
	state => state
);
