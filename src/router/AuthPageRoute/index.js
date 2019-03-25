// @flow
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { FormAuth } from "../../containers";
import {
	loadingAppAction,
	loadingAppDoneAction,
	loginCorrectAction,
	signOutLocalAction,
	signOutFirebaseAction,
	loginRequestAction,
} from "../../actions";

const RoutePage = ({
	appLoadingStart,
	appLoadingEnd,
	loginCorrect,
	signOutLocal,
	signOutFirebase,
	loginRequest,
	...restProps
}) => {
	const actionProps = {
		appLoadingStart,
		appLoadingEnd,
		loginCorrect,
		signOutLocal,
		signOutFirebase,
		loginRequest,
	};
	return <Route {...restProps} render={() => <FormAuth {...actionProps} />} />;
};

const mapDispatchToProps = dispatch => {
	return {
		appLoadingStart() {
			dispatch(loadingAppAction());
		},
		appLoadingEnd() {
			dispatch(loadingAppDoneAction());
		},
		loginCorrect() {
			dispatch(loginCorrectAction());
		},
		signOutLocal() {
			dispatch(signOutLocalAction());
		},
		signOutFirebase() {
			dispatch(signOutFirebaseAction());
		},
		loginRequest(value) {
			dispatch(loginRequestAction(value));
		},
	};
};

export const AuthPageRoute = connect(mapDispatchToProps)(RoutePage);
