import { createSelector } from "reselect";

const getLoadingState = state => state.appLoading.loading;

export const loadingSelector = createSelector(
	getLoadingState,
	isloading => isloading
);
