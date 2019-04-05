import React, { Component } from "react";
import { connect } from "react-redux";
import { addReview } from "../../actions";
import { loginStateSelector } from "../../selectors";

class WrappedContainer extends Component {
	render() {
		// console.log("test OrderFormProvider props");
		// console.log(this.props);

		const { component: WrappedComponent, ...restProps } = this.props;

		return <WrappedComponent {...restProps} />;
	}
}

const mapStateToProps = store => {
	return { loginState: loginStateSelector(store) };
};

const mapDispatchToProps = dispatch => {
	return {
		addReviewInList(newArray) {
			dispatch(addReview(newArray));
		},
	};
};

export const AuthProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
