import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction } from "../../actions";

class WrappedContainer extends Component {
	render() {
		// console.log("test OrderFormProvider props");
		// console.log(this.props);

		const { component: WrappedComponent, ...restProps } = this.props;

		return <WrappedComponent {...restProps} />;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signInFunc(email, password) {
			dispatch(loginRequestAction(email, password));
		},
	};
};

export const AuthProvider = connect(
	null,
	mapDispatchToProps
)(WrappedContainer);
