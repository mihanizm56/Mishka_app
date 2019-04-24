import React, { Component } from "react";
import { connect } from "react-redux";
import {
	addReviewRequestAction,
	openModalReviewAction,
	closeModalReviewAction,
	fetchReviewsAction,
} from "../../../actions";
import {
	reviewSelector,
	modalStateSelector,
	sendingRequestStateSelector,
	sendingSuccessSelector,
} from "../../../store/selectors";

class WrappedContainer extends Component {
	static defaultProps = {
		addReviewInList: () => console.log("default addReviewInList"),
	};

	componentDidMount() {
		// console.log("ReviewsStoreProvider mounted");
		// console.log(this.props);

		this.props.fetchReviews();
	}

	componentDidUpdate() {
		// console.log("ReviewsStoreProvider updated");
		// console.log(this.props);
	}

	render = () => {
		const { children, fetchReviews, ...restProps } = this.props;
		return React.Children.map(children, child => React.cloneElement(child, { ...restProps }));
	};
}

const mapStateToProps = store => {
	return {
		reviews: reviewSelector(store),
		modalReviewIsOpen: modalStateSelector(store),
		reviewIsSending: sendingRequestStateSelector(store),
		sendingIsSuccess: sendingSuccessSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		openReviewsModal() {
			dispatch(openModalReviewAction());
		},
		closeReviewsModal() {
			dispatch(closeModalReviewAction());
		},
		addReviewInList(value) {
			dispatch(addReviewRequestAction(value));
		},
		fetchReviews() {
			dispatch(fetchReviewsAction());
		},
	};
};

export const ReviewsStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
