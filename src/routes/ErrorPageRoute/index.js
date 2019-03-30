// @flow
import React from "react";
import { Route } from "react-router-dom";
import { ErrorPage } from "../../components/organisms/";

export const ErrorPageRoute = ({ ...restProps }) => {
	return <Route {...restProps} render={() => <ErrorPage />} />;
};
