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
	changePageType,
} from "../constants";
import firebase from "firebase";

export type ACReturns = { type: string, payload: string };

export function loginCorrect() {
	console.log("test loginSuccess");
	localStorage.login = "true";
	return {
		type: loginSuccess,
	};
}

export function loadingApp() {
	console.log("test loadingApp");
	return {
		type: appIsLoading,
	};
}

export function changePageAction(page) {
	console.log("test changePage");
	return {
		type: changePageType,
		payload: page,
	};
}

export function selectFilter(value) {
	console.log("test selectedFilter");
	return {
		type: changeSelectedFilter,
		payload: value,
	};
}

export function loadingAppDone() {
	console.log("test loadingAppDone");
	return {
		type: appHasLoaded,
	};
}

export function signOutLocal() {
	console.log("test signOut");
	localStorage.login = "";
	return {
		type: signOut,
	};
}

export function changeRangeMin(number) {
	return {
		type: changeRangeMinValue,
		payload: number,
	};
}

export function changeRangeMax(number) {
	return {
		type: changeRangeMaxValue,
		payload: number,
	};
}

export function changeSearchField(value) {
	return {
		type: changeSearchFilter,
		payload: value,
	};
}

export function signOutFirebase() {
	return dispatch => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch(signOutLocal());
				console.log("signOutUser done");
			})
			.catch(function(error) {
				console.error("signOutFirebase failed");
			});
	};
}

export function loginRequest(email, password) {
	console.log("check loginRequest");
	console.log(`email = ${email}, password = ${password}`);
	if (email !== "" && password !== "") {
		return dispatch => {
			return firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => dispatch(loginCorrect()))
				.then(() => dispatch(loadingAppDone()))
				.catch(error => {
					dispatch(loadingAppDone());
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
