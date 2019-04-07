import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction } from "../../../actions";
import { loginStateSelector } from "../../../selectors";

class WrappedContainer extends Component {
	static defaultProps = {
		signInFunc: () => console.log("default signInFunc"),
	};

	componentDidMount() {
		console.log("check AuthStoreProvider props");
		console.log(this.props);
	}

	render = () => {
		const { children, signInFunc, loggedIn } = this.props;
		return React.Children.map(children, child =>
			React.cloneElement(child, { signInFunc: signInFunc, loggedIn: loggedIn })
		);
	};
}

const mapStateToProps = store => {
	return {
		loggedIn: loginStateSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signInFunc(email, password) {
			dispatch(loginRequestAction(email, password));
		},
	};
};

export const AuthStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
