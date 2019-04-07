import { createSelector } from "reselect";

const getLoginState = state => state.loginState.login;
const getUserName = state => state.loginState.name;

export const loginStateSelector = createSelector(
	[getLoginState],
	loginState => loginState
);

export const userNameSelector = createSelector(
	[getUserName],
	name => name
);