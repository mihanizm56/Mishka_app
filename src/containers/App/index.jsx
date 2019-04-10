import React, { Component } from "react";
import { connect } from "react-redux";
import { registerApp } from "../../utils";
import { MainWrapper } from "../../components/organisms";
import {
	loginStateSelector,
	loadingSelector,
	modalAuthStateSelector,
	modalStateSelector,
	sendingRequestStateSelector,
} from "../../store/selectors";
import "./App.css";
import "../../styles/keyframes/keyframes.css";

class AppContainer extends Component {
	componentDidMount() {
		registerApp();
		console.log("app registered in firebase");
	}

	componentDidUpdate() {
		console.log("app updated");
		console.log(this.props);
	}

	render() {
		console.log("test App props");
		console.log(this.props);
		const { loginState, sendingLoading, ...restProps } = this.props;
		const loginSucceed = loginState || localStorage.login === "true";
		return (
			<div className="global-wrapper">
				<MainWrapper loginState={loginSucceed} sendingLoading={sendingLoading} {...restProps} />
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		router: store.router,
		loginState: loginStateSelector(store),
		appLoading: loadingSelector(store),
		modalAuthIsOpen: modalAuthStateSelector(store),
		modalReviewIsOpen: modalStateSelector(store),
		sendingLoading: sendingRequestStateSelector(store),
	};
};

export const App = connect(mapStateToProps)(AppContainer);
