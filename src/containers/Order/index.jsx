import React, { Component } from "react";
import { reduxForm } from "redux-form";

class WrappedContainer extends Component {
	render() {
		// console.log("test OrderFormProvider props");
		// console.log(this.props);

		const { component: WrappedComponent, ...restProps } = this.props;

		return <WrappedComponent {...restProps} />;
	}
}

export const OrderFormProvider = reduxForm({
	validate: ({ email, password }) => {
		const errors = {};
		if (!email || email === "") errors.email = "Failed email";
		if (!password || password === "") errors.password = "Failed password";
		return errors;
	},
	form: "review",
})(WrappedContainer);
