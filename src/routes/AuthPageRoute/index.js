// @flow
import React from "react";
import { Route } from "react-router-dom";
import { FormAuth } from "../../containers";

export const AuthPageRoute = props => <Route render={() => <FormAuth {...props} />} />;
