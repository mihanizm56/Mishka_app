// @flow
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { CatalogPage } from "../../containers";
import {
	loadingAppAction,
	loadingAppDoneAction,
	selectFilterAction,
	changeRangeMinAction,
	changeRangeMaxAction,
	changeSearchFieldAction,
} from "../../actions";

const RoutePage = ({
	shopItems,
	appLoadingStart,
	appLoadingEnd,
	selectFilter,
	changeRangeMin,
	changeRangeMax,
	changeSearchField,
	...restProps
}) => {
	const actionProps = {
		appLoadingStart,
		appLoadingEnd,
		selectFilter,
		changeRangeMin,
		changeRangeMax,
		changeSearchField,
	};
	return <Route {...restProps} render={() => <CatalogPage {...actionProps} shopItems={shopItems} />} />;
};

const mapStateToProps = store => {
	return { shopItems: store.shopItems };
};

const mapDispatchToProps = dispatch => {
	return {
		appLoadingStart() {
			dispatch(loadingAppAction());
		},
		appLoadingEnd() {
			dispatch(loadingAppDoneAction());
		},
		selectFilter(value) {
			dispatch(selectFilterAction(value));
		},
		changeRangeMin(value) {
			dispatch(changeRangeMinAction(value));
		},
		changeRangeMax(value) {
			dispatch(changeRangeMaxAction(value));
		},
		changeSearchField(value) {
			dispatch(changeSearchFieldAction(value));
		},
	};
};

export const CatalogPageRoute = connect(
	mapStateToProps,
	mapDispatchToProps
)(RoutePage);
