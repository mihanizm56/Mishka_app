import React from "react";
import { Route, Switch } from "react-router-dom";
import { CatalogPage, HiddenPage } from "../modules";
import FormAuth from "../modules/FormAuth";
import { ErrorComponent } from "../components";

export const Router = ({
	parameter,
	userSignIn,
	userSignOut,
	isLoading,
	appToLoad,
	changeMinFilterValue,
	changeMaxFilterValue,
	itemsFilters,
	shopItems,
	changeTypeOfSort,
}) => {
	return (
		<Switch>
			{/* <Route exact path="/" render={() => <CatalogPage />} /> */}
			<Route
				exact
				// path="/catalog"
				path="/"
				render={() => (
					<CatalogPage
						changeMinFilterValue={changeMinFilterValue}
						changeMaxFilterValue={changeMaxFilterValue}
						itemsFilters={itemsFilters}
						shopItems={shopItems}
						changeTypeOfSort={changeTypeOfSort}
					/>
				)}
			/>
			<Route exact path="/hiddenpage" render={() => <HiddenPage login={parameter} />} />
			<Route
				exact
				path="/formauth"
				render={() => (
					<FormAuth
						appToLoad={appToLoad}
						isLoading={isLoading}
						signInFunc={userSignIn}
						signOutFunc={userSignOut}
						login={parameter}
					/>
				)}
			/>
			<Route exact render={() => <ErrorComponent />} />
		</Switch>
	);
};
