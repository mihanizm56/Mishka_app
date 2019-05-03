import React, { Component } from "react";
import { connect } from "react-redux";
import {
	loginRequestAction,
	signOutFirebaseAction,
	loginStateSelector,
	userNameSelector,
	errorAuthSelector,
	errorAuthClearAction,
} from "../../../redux/modules/loginReducer";
import { openAuthModalAction, closeAuthModalAction } from "../../../redux/modules/modalAuth";
import { loadingSelector } from "../../../redux/modules/appLoading";

class WrappedContainer extends Component {
	static defaultProps = {
		signInFunc: () => console.log("default signInFunc"),
	};

	componentDidMount() {
		// console.log("check AuthStoreProvider props");
		// console.log(this.props);
	}

	render = () => {
		const { children, ...restProps } = this.props;
		return React.Children.map(children, child => React.cloneElement(child, { ...restProps }));
	};
}

const mapStateToProps = store => {
	return {
		isLoading: loadingSelector(store),
		loginState: loginStateSelector(store),
		userName: userNameSelector(store),
		errorAuth: errorAuthSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signInFunc(email, password, name) {
			dispatch(loginRequestAction(email, password, name));
		},
		closeModal() {
			dispatch(closeAuthModalAction());
		},
		signOutFunc() {
			dispatch(signOutFirebaseAction());
		},
		openModal() {
			dispatch(openAuthModalAction());
			dispatch(errorAuthClearAction());
		},
	};
};

export const AuthStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
