import React, { PureComponent } from "react";
import { ReviewBox } from "..";
import { getUserName, getUserSurname } from "../../../../utils";

export class ListReviewsBox extends PureComponent {
	static getDerivedStateFromProps(nextProps, prevState) {
		// if проверка массивов, да да!!

		if (nextProps.reviews) {
			return { ...prevState, reviews: nextProps.reviews };
		}

		return { ...prevState };
	}

	state = {
		reviews: [],
		indexOfReview: 0,
	};

	componentDidMount() {
		// console.log("ListReviewsBox mounted", this.props);
	}

	onNextClick = () => {
		// console.log("handle onNextClick");
		const { reviews, indexOfReview } = this.state;
		const lengthOfReviewList = reviews.length;

		if (indexOfReview < lengthOfReviewList - 1) {
			this.setState(prevState => ({ indexOfReview: prevState.indexOfReview + 1 }));
		}
	};

	onPrevClick = () => {
		// console.log("handle onPrevClick");
		const { indexOfReview } = this.state;

		if (indexOfReview) {
			this.setState(prevState => ({ indexOfReview: prevState.indexOfReview - 1 }));
		}
	};

	render() {
		// console.log("ListReviewsBox props");
		// console.log(this.props);

		const { reviews, indexOfReview } = this.state;
		const activeReview = reviews[indexOfReview] || {};
		const { text = "", user = "", login = "" } = activeReview;
		const { openReviewsModal } = this.props;

		return (
			<ReviewBox
				review={text}
				name={getUserName(user)}
				surname={getUserSurname(user)}
				login={login}
				onNextClick={this.onNextClick}
				onPrevClick={this.onPrevClick}
				addReview={openReviewsModal}
			/>
		);
	}
}
