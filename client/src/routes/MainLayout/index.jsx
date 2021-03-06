//
import React from "react";
import { Switch } from "react-router-dom";
import { CatalogPageRoute } from "../CatalogPageRoute";
import { ErrorPageRoute } from "../ErrorPageRoute";
import { IndexPageRoute } from "../IndexPageRoute";
import { OrderPageRoute } from "../OrderPageRoute";

export const MainLayout = props => {
	// console.log("пропсы в MainLayout", props);
	return (
		<Switch>
			<IndexPageRoute exact path="/" {...props} />
			<IndexPageRoute path="/index" {...props} />
			<OrderPageRoute path="/orderpage" {...props} />
			<CatalogPageRoute path="/catalog" {...props} />
			<ErrorPageRoute />
		</Switch>
	);
};
