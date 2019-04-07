import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction, closeAuthModalAction } from "../../../actions";

class WrappedContainer extends Component {
	static defaultProps = {
		signInFunc: () => console.log("default signInFunc"),
	};

	componentDidMount() {
		console.log("check AuthStoreProvider props");
		console.log(this.props);
	}

	render = () => {
		const { children, signInFunc, closeModal } = this.props;
		return React.Children.map(children, child =>
			React.cloneElement(child, { signInFunc: signInFunc, closeModal: closeModal })
		);
	};
}

const mapDispatchToProps = dispatch => {
	return {
		signInFunc(email, password) {
			dispatch(loginRequestAction(email, password));
		},
		closeModal() {
			dispatch(closeAuthModalAction());
		},
	};
};

export const AuthStoreProvider = connect(
	null,
	mapDispatchToProps
)(WrappedContainer);
