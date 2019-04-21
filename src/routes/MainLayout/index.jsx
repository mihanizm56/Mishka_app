//
import React from "react";
import { Switch } from "react-router-dom";
import { CatalogPageRoute } from "../CatalogPageRoute";
import { ErrorPageRoute } from "../ErrorPageRoute";
import { IndexPageRoute } from "../IndexPageRoute";
import { OrderPageRoute } from "../OrderPageRoute";

type MainLayoutPropTypes = {};

export const MainLayout = (props: MainLayoutPropTypes) => {
	// console.log("пропсы в MainLayout", props);
	return (
		<Switch>
			<IndexPageRoute exact path="/" />
			<IndexPageRoute path="/index" />
			<OrderPageRoute path="/orderpage" />
			<CatalogPageRoute path="/catalog" />
			<ErrorPageRoute />
		</Switch>
	);
};
