import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "../../router";
import {
	loginRequest,
	signOutFirebase,
	loadingApp,
	changeRangeMin,
	changeRangeMax,
	selectFilter,
	changeSearchField,
	changePageAction,
} from "../../actions";
import { registerApp } from "../../helpers";
import { SearchField } from "../../components";
import { Footer } from "../../modules";
import "./App.css";

class App extends Component {
	componentDidMount() {
		registerApp();
		console.log("app registered");
	}

	render() {
		console.log("test App props");
		console.log(this.props);
		const {
			loginState,
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
		} = this.props;
		const userIsLoggedIn = loginState.login || localStorage.login === "true";
		return (
			<div className="global-wrapper">
				<SearchField callback={changeSearchFilter} />
				<button onClick={() => userIsLoggedIn && userSignOut()}>Выйти</button>
				<Router
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
				/>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = store => {
	return { ...store };
};

const mapDispatchToProps = dispatch => {
	return {
		userSignIn(email, password) {
			dispatch(loginRequest(email, password));
		},
		userSignOut() {
			dispatch(signOutFirebase());
		},
		appToLoad() {
			dispatch(loadingApp());
		},
		changeMinFilterValue(number) {
			dispatch(changeRangeMin(number));
		},
		changeMaxFilterValue(number) {
			dispatch(changeRangeMax(number));
		},
		changeTypeOfSort(value) {
			dispatch(selectFilter(value));
		},
		changeSearchFilter(value) {
			dispatch(changeSearchField(value));
		},
		changePage(page) {
			dispatch(changePageAction(page));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
