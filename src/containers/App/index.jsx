import React, { Component } from "react";
import { connect } from "react-redux";
import { registerApp } from "../../utils";
import { MainWrapper } from "../../components/organisms";
import { loginStateSelector, loadingSelector } from "../../selectors";
import "./App.css";

class AppContainer extends Component {
	state = {
		modalAuthIsOpen: false,
	};

	componentDidMount() {
		registerApp();
		console.log("app registered in firebase");
	}

	componentDidUpdate() {
		console.log("app updated");
		console.log(this.props);
	}

	render() {
		// console.log("test App props");
		// console.log(this.props);
		const { modalAuthIsOpen } = this.state;
		const { loginState, router } = this.props;
		const userIsLoggedIn = loginState.login && localStorage.login === "true";
		return (
			<div className="global-wrapper">
				<MainWrapper userIsLoggedIn={userIsLoggedIn} router={router} modalAuthIsOpen={modalAuthIsOpen} />
				{/* <TrueCheckBox /> */}
				{/* <SearchField callback={changeSearchFilter} /> */}
				{/* <button onClick={() => userIsLoggedIn && userSignOut()}>Выйти</button> */}
			</div>
		);
	}
}

const mapStateToProps = store => {
	return { router: store.router, loginState: loginStateSelector(store), appLoading: loadingSelector(store) };
};

export const App = connect(mapStateToProps)(AppContainer);
