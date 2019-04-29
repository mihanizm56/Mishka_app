import { createSelector } from "reselect";

const getLoadingState = state => state.appLoadingReducer.loading;

export const loadingSelector = createSelector(
	[getLoadingState],
	isloading => isloading
);
