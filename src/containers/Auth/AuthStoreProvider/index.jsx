import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction, closeAuthModalAction, signOutFirebaseAction, openAuthModalAction } from "../../../actions";
import { loadingSelector, loginStateSelector, userNameSelector } from "../../../store/selectors";

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
		},
	};
};

export const AuthStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
