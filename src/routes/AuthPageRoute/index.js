// @flow
import React from "react";
import { Route } from "react-router-dom";
import { FormAuthTest } from "../../components/organisms/";

export const AuthPageRoute = props => <Route render={() => <FormAuthTest {...props} />} />;
