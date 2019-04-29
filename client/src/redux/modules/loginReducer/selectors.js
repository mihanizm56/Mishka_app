import { createSelector } from "reselect";

const getLoginState = state => state.loginStateReducer.login;
const getUserName = state => state.loginStateReducer.name;

export const loginStateSelector = createSelector(
	[getLoginState],
	loginState => loginState
);

export const userNameSelector = createSelector(
	[getUserName],
	name => name
);
