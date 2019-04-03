// @flow
import firebase from "firebase";
import { loginSuccess, signOut } from "../../constants";
import { loadingAppDoneAction } from "../loading";

export const loginCorrectAction = () => {
	console.log("test loginSuccess");
	localStorage.login = "true";
	return {
		type: loginSuccess,
	};
};
export const signOutLocalAction = () => {
	console.log("test signOut");
	localStorage.login = "";
	return {
		type: signOut,
	};
};
export const signOutFirebaseAction = () => {
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
};
export const loginRequestAction = (email, password) => {
	console.log("check loginRequest");
	console.log(`email = ${email}, password = ${password}`);
	if (email !== "" && password !== "") {
		return dispatch => {
			dispatch(loadingAppDoneAction())
			
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
