import firebase from "firebase";
import {
	LOGIN_SUCCESS,
	SIGN_OUT,
	AUTH_MODAL_OPEN,
	AUTH_MODAL_CLOSE,
	SAVE_NAME,
	CLEAR_NAME,
	NETWORK_CONNECTION_ERROR,
} from "./constants";
import { loginCorrectAction, signOutLocalAction, setUserName, clearUserName, loginNetworkErrorAction } from "./actions";
import { openAuthModalAction, closeAuthModalAction } from "../modalAuth";
import { loadingAppAction, loadingAppDoneAction } from "../appLoading";

export const loginRequestAction = (email, password, name) => {
	console.log("check loginRequest");
	console.log(`email = ${email}, password = ${password}, name=${name}`);
	if (email && password && name) {
		return dispatch => {
			dispatch(loadingAppAction());

			return firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => dispatch(loginCorrectAction()))
				.then(() => dispatch(loadingAppDoneAction()))
				.then(() => {
					setTimeout(() => {
						dispatch(closeAuthModalAction());
					}, 2000);
				})
				.then(() => dispatch(setUserName(name)))
				.catch(error => error)
				.then(({ code, message }) => {
					dispatch(loadingAppDoneAction());

					if (code === NETWORK_CONNECTION_ERROR) {
						console.log("ERROR NETWORK");
						dispatch(loginNetworkErrorAction());
					} else {
						alert(message);
					}
				});
		};
	}
};

export const signOutFirebaseAction = () => {
	return dispatch => {
		firebase
			.auth()
			.signOut()
			.then(() => dispatch(clearUserName()))
			.then(() => dispatch(signOutLocalAction()))
			.catch(function(error) {
				alert("signOutFirebase failed");
				console.error("error", error);
			});
	};
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
