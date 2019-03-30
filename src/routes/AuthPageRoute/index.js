// @flow
import React from "react";
import { Route } from "react-router-dom";
import { FormAuth } from "../../components/organisms/";

export const AuthPageRoute = props => <Route render={() => <FormAuth {...props} />} />;
