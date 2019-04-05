import React, { Component } from "react";
import { connect } from "react-redux";
import { addReview } from "../../actions";
import { loginStateSelector } from "../../selectors";

class WrappedContainer extends Component {
	render() {
		// console.log("test AuthProvider props");
		// console.log(this.props);

		const { component: WrappedComponent, reviews } = this.props;

		return <WrappedComponent reviews={reviews} />;
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
