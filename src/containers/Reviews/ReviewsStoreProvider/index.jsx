import React, { Component } from "react";
import { connect } from "react-redux";
import {
	addReviewRequestAction,
	openModalReviewAction,
	closeModalReviewAction,
	setSendingStateAction,
} from "../../../actions";
import { reviewSelector, modalStateSelector } from "../../../store/selectors";

class WrappedContainer extends Component {
	static defaultProps = {
		addReviewInList: () => console.log("default addReviewInList"),
	};

	componentDidMount() {
		console.log("test ReviewsStoreProvider props");
		console.log(this.props);
	}

	render = () => {
		const { children, ...restProps } = this.props;
		return React.Children.map(children, child => React.cloneElement(child, { ...restProps }));
	};
}

const mapStateToProps = store => {
	return { reviews: reviewSelector(store), modalReviewIsOpen: modalStateSelector(store) };
};

const mapDispatchToProps = dispatch => {
	return {
		openReviewsModal() {
			dispatch(openModalReviewAction());
		},
		closeReviewsModal() {
			dispatch(closeModalReviewAction());
		},
		setSendingState(value) {
			dispatch(setSendingStateAction(value));
		},
		addReviewInList(value) {
			dispatch(addReviewRequestAction(value));
		},
	};
};

export const ReviewsStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
