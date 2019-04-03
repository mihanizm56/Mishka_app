import { createSelector } from "reselect";

const getLoginState = state => state.loginReducer.login;

export const topItemNameSelector = createSelector(
	getLoginState,
	loginState => loginState
);
