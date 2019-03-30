// @flow
import React from "react";
import { Route } from "react-router-dom";
import { OrderPage } from "../../components/organisms/";

export const OrderPageRoute = props => <Route render={() => <OrderPage {...props} />} />;
