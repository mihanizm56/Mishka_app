import React, { Component } from "react";
import { connect } from "react-redux";
import { registerApp } from "../../utils";
import { MainWrapper } from "../../components/organisms";
import "./App.css";

import { OpenSansText } from "../../components";

class AppContainer extends Component {
	componentDidMount() {
		registerApp();
		console.log("app registered in firebase");
	}

	render() {
		console.log("test App props");
		console.log(this.props);
		const { loginState, router } = this.props;
		const userIsLoggedIn = loginState.login || localStorage.login === "true";
		return (
			<div className="global-wrapper">
				<MainWrapper userIsLoggedIn={userIsLoggedIn} router={router} />
				{/* <SearchField callback={changeSearchFilter} /> */}
				{/* <button onClick={() => userIsLoggedIn && userSignOut()}>Выйти</button> */}
			</div>
		);
	}
}

const mapStateToProps = store => {
	return { router: store.router, loginState: store.loginState, appLoading: store.appLoading };
};

export const App = connect(mapStateToProps)(AppContainer);
