import React, { Component } from "react";
import { connect } from "react-redux";

import {
	loginRequest,
	signOutFirebase,
	loadingApp,
	changeRangeMin,
	changeRangeMax,
	selectFilter,
	changeSearchField
} from "../../actions";
import { registerApp } from "../../helpers";
import { SearchField } from "../../components";
import { MainWrapper } from "..";
import "./App.css";

class App extends Component {
	componentDidMount() {
		registerApp();
		console.log("app registered in firebase");
	}

	render() {
		//console.log("test App props");
		//console.log(this.props);
		const { loginState, ...restProps } = this.props;
		const userIsLoggedIn = loginState.login || localStorage.login === "true";
		return (
			<div className="global-wrapper">
				<MainWrapper {...restProps} userIsLoggedIn={userIsLoggedIn} />
				{/* <SearchField callback={changeSearchFilter} /> */}
				{/* <button onClick={() => userIsLoggedIn && userSignOut()}>Выйти</button> */}
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
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
