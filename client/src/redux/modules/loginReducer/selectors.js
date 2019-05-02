import { createSelector } from "reselect";

const getLoginState = state => state.loginReducer.login;
const getUserName = state => state.loginReducer.name;
const getErrorAuth = state => state.loginReducer.error;

export const loginStateSelector = createSelector(
	[getLoginState],
	loginState => loginState
);

export const userNameSelector = createSelector(
	[getUserName],
	name => name
);

export const errorAuthSelector = createSelector(
	[getErrorAuth],
	error => error
);
