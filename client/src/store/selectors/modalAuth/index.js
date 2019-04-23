import { createSelector } from "reselect";

const getModalAuthState = state => state.modalAuthStateReducer.authModelOpened;

export const modalAuthStateSelector = createSelector(
	[getModalAuthState],
	isOpened => isOpened
);
