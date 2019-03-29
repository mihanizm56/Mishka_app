// @flow
import React from "react";
import { Route } from "react-router-dom";
import { CatalogPage } from "../../containers";

export const CatalogPageRoute = (props) => {
	return <Route {...props} render={() => <CatalogPage />} />;
};
