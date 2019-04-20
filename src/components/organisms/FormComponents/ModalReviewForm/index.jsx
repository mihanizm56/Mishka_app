import React, { Component } from "react";
import { Field } from "redux-form";
import { FormTextInputField, Button, SVGIcon, TextArea } from "../../../../components";
// import {ReviewsStoreProvider,ReviewReduxFormProvider } from '../../../../containers'
import "./ModalReviewForm.css";

export class ModalReviewForm extends Component {
	static defaultProps = {
		addReviewInList: () => console.log("default addReviewInList"),
	};

	sendReview = ({ review: text, user, login }) => {
		console.log("check sendReview");
		console.log(this.props.reviews);
		const { addReviewInList } = this.props;
		addReviewInList([...this.props.reviews, { text, user, login }]);
	};

	componentDidMount() {
		console.log("ModalReviewForm props");
		console.log(this.props);
	}

	loadingLayout = () => (
		<div className="loading-icon">
			<SVGIcon icon="loading" />
		</div>
	);

	successLayout = () => (
		<div className="success-icon">
			<SVGIcon icon="success" />
		</div>
	);

	normalLayout = () => (
		<>
			<div className="review-form__field">
				<Field
					component={FormTextInputField}
					placeholder="Ваши имя и фамилия"
					noBorderBottom
					noMarginTop
					noPadding
					noTitle
					label="мыло"
					type="text"
					name="user"
				/>
			</div>
			<div className="review-form__field">
				<Field
					component={FormTextInputField}
					placeholder="Ваш логин"
					noBorderBottom
					noMarginTop
					noPadding
					noTitle
					label="имя"
					type="text"
					name="login"
				/>
			</div>
			<div className="review-form__textarea">
				<Field
					component={TextArea}
					placeholder="Ваш отзыв"
					customPadding
					noBorder
					withBorderRadius
					label="мыло"
					type="text"
					name="review"
				/>
			</div>
			<div className="review-form__button">
				<Button buttonType="submit" classname="button-auth-modal" text="Отправить отзыв" />
			</div>
		</>
	);

	getFormLayout = ({ isLoading, sendingIsSuccess }) => {
		if (isLoading) return this.loadingLayout();
		else if (sendingIsSuccess) return this.successLayout();
		else return this.normalLayout();
	};

	render() {
		const { handleSubmit, closeReviewsModal, reviewIsSending, sendingIsSuccess } = this.props;

		return (
			<div className="review-form-layout">
				<div className="review-form-overlay" onClick={closeReviewsModal} />
				<form className="review-form-wrapper" onSubmit={handleSubmit(this.sendReview)}>
					{this.getFormLayout({ isLoading: reviewIsSending, sendingIsSuccess: sendingIsSuccess })}
				</form>
			</div>
		);
	}
}
