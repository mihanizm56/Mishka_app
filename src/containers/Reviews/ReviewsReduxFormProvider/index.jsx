import React, { Component } from "react";
import { reduxForm } from "redux-form";

class WrappedContainer extends Component {
	componentDidMount() {
		console.log("check ReviewsReduxFormProvider store props");
		console.log(this.props);
	}

	render = () => {
		const { children } = this.props;

		return React.Children.map(children, child => React.cloneElement(child, { ...this.props }));
	};
}

export const ReviewsReduxFormProvider = reduxForm({
	validate: ({ review, user, login }) => {
		const errors = {};
		if (!review) errors.text = "Failed review";
		if (!user) errors.user = "Failed user";
		if (!login) errors.login = "Failed login";
		return errors;
	},
	form: "review-form",
})(WrappedContainer);
