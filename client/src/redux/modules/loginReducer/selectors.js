import { createSelector } from "reselect";

const getLoginState = state => state.loginReducer.login;
const getUserName = state => state.loginReducer.name;

export const loginStateSelector = createSelector(
	[getLoginState],
	loginState => loginState
);

export const userNameSelector = createSelector(
	[getUserName],
	name => name
);
