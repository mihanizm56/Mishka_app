// @flow
import firebase from "firebase";
import { LOGIN_SUCCESS, SIGN_OUT, AUTH_MODAL_OPEN, AUTH_MODAL_CLOSE } from "../../constants";
import { loadingAppAction, loadingAppDoneAction } from "../loading";

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

export const signOutFirebaseAction = () => {
	return dispatch => {
		firebase
			.auth()
			.signOut()
			.then(() => dispatch(signOutLocalAction()))
			.catch(function(error) {
				console.error("signOutFirebase failed");
			});
	};
};

export const openAuthModalAction = () => {
	// console.log("test openAuthModalAction");
	return {
		type: AUTH_MODAL_OPEN,
	};
};

export const closeAuthModalAction = () => {
	// console.log("test closeAuthModalAction");
	return {
		type: AUTH_MODAL_CLOSE,
	};
};

export const loginRequestAction = (email, password) => {
	console.log("check loginRequest");
	console.log(`email = ${email}, password = ${password}`);
	if (email !== "" && password !== "") {
		return dispatch => {
			console.log("прошёл");
			dispatch(loadingAppAction());

			return firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => dispatch(loginCorrectAction()))
				.then(() => dispatch(loadingAppDoneAction()))
				.then(() => dispatch(closeAuthModalAction()))
				.catch(error => {
					dispatch(loadingAppDoneAction());
					alert(error.message);
				});
		};
	}
};

//import { authentificate} from '../utils'
// export function signUpFirebase(email, password) {
// 	console.log("check signUpFirebase request");
// 	console.log(`email = ${email}, password = ${password}`);
// 	return dispatch => {
// 		if (email !== "" && password !== "") {
// 			return dispatch => {
// 				firebase
// 					.auth()
// 					.createUserWithEmailAndPassword(email, password)
// 					.then(() => dispatch(loginCorrect()))
// 					.then(() => dispatch(loadingAppDone()))
// 					.catch(function(error) {
// 						dispatch(loadingAppDone());
// 						alert(error.message);
// 					});
// 			}; 																						////не даёт создать в базе
// 		}
// 	};
// }
