//
import React from "react";
import { Route } from "react-router-dom";
import { OrderPage } from "../../components/organisms/";
import { OrderFormProvider } from "../../containers";

export const OrderPageRoute = props => <Route render={() => <OrderFormProvider component={OrderPage} />} />;
