//
import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { OrderFormProvider } from "../../containers";
const OrderPage = lazy(() => import("../../components/organisms/pages/OrderPage/OrderPage"));

export const OrderPageRoute = props => (
	<Suspense fallback={<></>}>
		<Route render={() => <OrderFormProvider component={OrderPage} />} />
	</Suspense>
);
