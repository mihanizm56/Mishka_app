import React from "react";
import { Router } from "../../../router";
import { Footer, Header } from "../";
import "./MainWrapper.css";

export const MainWrapper = props => {
	const {
		userSignIn,
		appLoading,
		appToLoad,
		userSignOut,
		changeMinFilterValue,
		changeMaxFilterValue,
		itemsFilters,
		shopItems,
		changeTypeOfSort,
		changeSearchFilter,
		changePage,
		userIsLoggedIn,
	} = props;
	return (
		<div className="main-wrapper">
			<Header />
			{/* <Router
				appToLoad={appToLoad}
				isLoading={appLoading.loading}
				parameter={userIsLoggedIn}
				userSignIn={userSignIn}
				changeMinFilterValue={changeMinFilterValue}
				changeMaxFilterValue={changeMaxFilterValue}
				itemsFilters={itemsFilters}
				shopItems={shopItems}
				changeTypeOfSort={changeTypeOfSort}
				changePage={changePage}
			/> */}
			{/* <Footer /> */}
		</div>
	);
};
