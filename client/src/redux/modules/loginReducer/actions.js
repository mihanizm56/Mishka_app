import {
	LOGIN_SUCCESS,
	SIGN_OUT,
	AUTH_MODAL_OPEN,
	AUTH_MODAL_CLOSE,
	SAVE_NAME,
	CLEAR_NAME,
	CLEAR_ERRORS,
	NETWORK_ERROR,
} from "./constants";
import { loadingAppAction, loadingAppDoneAction } from "../appLoading";
import { openAuthModalAction, closeAuthModalAction } from "../modalAuth";
import { errors } from "../../../constants";

export const loginCorrectAction = () => {
	// console.log("test loginSuccess");
	localStorage.login = "true";
	return {
		type: LOGIN_SUCCESS,
	};
};

export const signOutLocalAction = () => {
	// console.log("test signOut");
	localStorage.login = "";
	return {
		type: SIGN_OUT,
	};
};

export const setUserName = name => {
	console.log("test setUserName");
	localStorage.userName = `${name}`;
	return {
		type: SAVE_NAME,
		payload: name,
	};
};

export const clearUserName = () => {
	console.log("test clearUserName");
	return {
		type: CLEAR_NAME,
	};
};

export const loginNetworkErrorAction = () => {
	console.log("test loginNetworkErrorAction");
	return {
		type: NETWORK_ERROR,
	};
};

export const errorAuthClearAction = () => {
	console.log("test loginNetworkErrorAction");
	return {
		type: CLEAR_ERRORS,
	};
};
