//
import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
const CatalogPage = lazy(() => import("../../components/organisms/pages/CatalogPage/CatalogPage"));

export const CatalogPageRoute = props => (
	<Suspense fallback={<></>}>
		<Route {...props} render={() => <CatalogPage />} />
	</Suspense>
);
