//
import React from "react";
import { Route } from "react-router-dom";
import { OrderFormProvider } from "../../containers";
import { OrderPage } from "../../components";

export const OrderPageRoute = props => <Route render={() => <OrderFormProvider component={OrderPage} {...props} />} />;
