import { createSelector } from "reselect";

const getLoginState = state => state.loginState.login;

export const loginStateSelector = createSelector(
	[getLoginState],
	loginState => loginState
);
