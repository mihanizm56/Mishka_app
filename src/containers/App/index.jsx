import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "../../router";
import { loginRequest, signOutFirebase, loadingApp, changeRangeMin, changeRangeMax, selectFilter } from "../../actions";
import { registerApp } from "../../helpers";

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
		} = this.props;
		const userIsLoggedIn = loginState.login || localStorage.login === "true";
		return (
			<>
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
				/>
			</>
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
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
