import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
const IndexPage = lazy(() => import("../../components/organisms/pages/IndexPage/indexPage"));

export const IndexPageRoute = props => (
	<Suspense fallback={<></>}>
		<Route render={() => <IndexPage {...props} />} />
	</Suspense>
);
