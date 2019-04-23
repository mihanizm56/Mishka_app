//
import React from "react";
import { Route } from "react-router-dom";
import { ErrorPage } from "../../components/organisms";

export const ErrorPageRoute = props => {
	return <Route render={() => <ErrorPage {...props} />} />;
};
