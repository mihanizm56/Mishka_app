import { createSelector } from "reselect";

const getLoginState = state => state.loginReducer.login;

export const loginStateSelector = createSelector(
	getLoginState,
	loginState => loginState
);
