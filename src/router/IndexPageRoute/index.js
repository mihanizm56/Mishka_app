import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { IndexPage } from "../../containers";
import { loadingAppAction, loadingAppDoneAction } from "../../actions";

const RoutePage = ({ reviews, appLoadingStart, appLoadingEnd, ...restProps }) => (
	<Route
		{...restProps}
		render={() => <IndexPage reviews={reviews} appLoadingStart={appLoadingStart} appLoadingEnd={appLoadingEnd} />}
	/>
);

const mapStateToProps = store => {
	return { reviews: store.reviews };
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

export const IndexPageRoute = connect(
	mapStateToProps,
	mapDispatchToProps
)(RoutePage);
