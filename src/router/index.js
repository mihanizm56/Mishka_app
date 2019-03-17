import React from "react";
import { Route, Switch } from "react-router-dom";
import { CatalogPage, HiddenPage, IndexPage, OrderPage } from "../containers";
import FormAuth from "../containers/pages/FormAuth";
import { ErrorPage } from "../containers";

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
	changePage,
}) => {
	return (
		<Switch>
			<Route exact path="/" render={() => <IndexPage changePage={changePage} />} />
			<Route exact path="/index" render={() => <IndexPage changePage={changePage} />} />
			<Route
				exact
				path="/catalog"
				render={() => (
					<CatalogPage
						changeMinFilterValue={changeMinFilterValue}
						changeMaxFilterValue={changeMaxFilterValue}
						itemsFilters={itemsFilters}
						shopItems={shopItems}
						changeTypeOfSort={changeTypeOfSort}
						changePage={changePage}
					/>
				)}
			/>
			<Route exact path="/hiddenpage" render={() => <HiddenPage login={parameter} changePage={changePage} />} />
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
						changePage={changePage}
					/>
				)}
			/>
			<Route exact path="/orderpage" render={() => <OrderPage />} />
			<Route exact render={() => <ErrorPage />} />
		</Switch>
	);
};
