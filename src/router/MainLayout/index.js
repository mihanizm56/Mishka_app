// @flow
import React from "react";
import { Switch } from "react-router-dom";
// import { CatalogPage, HiddenPage, IndexPage, OrderPage, ErrorPage } from "../../containers";
import { AuthPageRoute, CatalogPageRoute, ErrorPageRoute, IndexPageRoute, OrderPageRoute } from "../";
// import FormAuth from "../../containers/pages/FormAuth";

type MainLayoutPropTypes = {};

export const MainLayout = (props: MainLayoutPropTypes) => {
	console.log("пропсы в MainLayout");
	console.log(props);
	return (
		<Switch>
			<IndexPageRoute exact path="/" />
			<IndexPageRoute path="/index" />
			<OrderPageRoute path="/order" />
			<CatalogPageRoute path="/catalog" />
			<AuthPageRoute path="/auth" />
			<ErrorPageRoute />
		</Switch>
	);
};
