// @flow
import React from "react";
import { Route } from "react-router-dom";
import { OrderPage } from "../../containers";

export const OrderPageRoute = props => <Route render={() => <OrderPage {...props} />} />;
