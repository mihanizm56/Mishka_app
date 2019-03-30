import React, { Component } from "react";
import { connect } from "react-redux";
import { addReview } from "../../actions";

class WrappedContainer extends Component {
	render() {
		console.log("test ReviewsProvider props");
		console.log(this.props);

		const { component: WrappedComponent, reviews } = this.props;

		return <WrappedComponent reviews={reviews} />;
	}
}

const mapStateToProps = store => {
	return { reviews: store.reviews.reviewList };
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
