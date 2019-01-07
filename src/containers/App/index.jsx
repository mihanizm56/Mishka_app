import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "../../router";
import { loginRequest, signOutFirebase, loadingApp, changeRangeMin, changeRangeMax } from "../../actions";
import { registerApp } from "../../helpers";

//import { Reostat } from "../../components";

class App extends Component {
	componentDidMount() {
		registerApp();
		console.log("app registered");
	}

	render() {
		// console.log("test state");
		// console.log(this.props);
		const {
			loginState,
			userSignIn,
			appLoading,
			appToLoad,
			userSignOut,
			changeMinFilterValue,
			itemsFilters,
			shopItems,
			changeMaxFilterValue
		} = this.props;
		const userIsLoggedIn = loginState.login || localStorage.login === "true";
		return (
			<>
				{/* <button onClick={() => userIsLoggedIn && userSignOut()}>Выйти</button>
				<Router
					appToLoad={appToLoad}
					isLoading={appLoading.loading}
					parameter={userIsLoggedIn}
					userSignIn={userSignIn}
					
				/> */}
				{/* <Reostat
					shopItems={shopItems}
					changeMaxFilterValue={changeMaxFilterValue}
					changeMinFilterValue={changeMinFilterValue}
					minValue={itemsFilters.rangeMin}
					maxValue={itemsFilters.rangeMax}
				/> */}
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
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
