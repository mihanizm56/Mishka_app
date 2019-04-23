//
import React from "react";
import { Route } from "react-router-dom";
import { CatalogPage } from "../../components";

export const CatalogPageRoute = props => <Route render={() => <CatalogPage {...props} />} />;
