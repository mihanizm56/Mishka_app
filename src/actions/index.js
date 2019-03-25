// @flow

import {
	loginSuccess,
	signOut,
	changeRangeMinValue,
	changeRangeMaxValue,
	appIsLoading,
	appHasLoaded,
	changeSelectedFilter,
	changeSearchFilter,
} from "../constants";
import firebase from "firebase";

export type ACReturns = { type: string, payload: string };

export function loginCorrectAction() {
	console.log("test loginSuccess");
	localStorage.login = "true";
	return {
		type: loginSuccess,
	};
}

export function loadingAppAction() {
	console.log("test loadingApp");
	return {
		type: appIsLoading,
	};
}

export function selectFilterAction(value) {
	console.log("test selectedFilter");
	return {
		type: changeSelectedFilter,
		payload: value,
	};
}

export function loadingAppDoneAction() {
	console.log("test loadingAppDone");
	return {
		type: appHasLoaded,
	};
}

export function signOutLocalAction() {
	console.log("test signOut");
	localStorage.login = "";
	return {
		type: signOut,
	};
}

export function changeRangeMinAction(number) {
	return {
		type: changeRangeMinValue,
		payload: number,
	};
}

export function changeRangeMaxAction(number) {
	return {
		type: changeRangeMaxValue,
		payload: number,
	};
}

export function changeSearchFieldAction(value) {
	return {
		type: changeSearchFilter,
		payload: value,
	};
}

export function signOutFirebaseAction() {
	return dispatch => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch(signOutLocalAction());
				console.log("signOutUser done");
			})
			.catch(function(error) {
				console.error("signOutFirebase failed");
			});
	};
}

export function loginRequestAction(email, password) {
	console.log("check loginRequest");
	console.log(`email = ${email}, password = ${password}`);
	if (email !== "" && password !== "") {
		return dispatch => {
			return firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => dispatch(loginCorrectAction()))
				.then(() => dispatch(loadingAppDoneAction()))
				.catch(error => {
					dispatch(loadingAppDoneAction());
					alert(error.message);
				});
		};
	}
}

//import { authentificate} from '../helpers'
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
