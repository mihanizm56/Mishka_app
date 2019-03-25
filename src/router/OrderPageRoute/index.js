// @flow
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { OrderPage } from "../../containers";
import { loadingAppAction, loadingAppDoneAction } from "../../actions";

const RoutePage = ({ appLoadingStart, appLoadingEnd, ...restProps }) => {
	const actionProps = {
		appLoadingStart,
		appLoadingEnd,
	};
	return <Route {...restProps} render={() => <OrderPage {...actionProps} />} />;
};

const mapDispatchToProps = dispatch => {
	return {
		appLoadingStart() {
			dispatch(loadingAppAction());
		},
		appLoadingEnd() {
			dispatch(loadingAppDoneAction());
		},
	};
};

export const OrderPageRoute = connect(mapDispatchToProps)(RoutePage);
