// @flow
import React from "react";
import { Route } from "react-router-dom";
import { CatalogPage } from "../../components/organisms/";

export const CatalogPageRoute = props => {
	return <Route {...props} render={() => <CatalogPage />} />;
};
