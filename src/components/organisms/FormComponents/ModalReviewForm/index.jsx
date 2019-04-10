import React, { Component } from "react";
import { Field } from "redux-form";
import { FormTextInputField, Button, SVGIcon, TextArea } from "../../../../components";
// import {ReviewsStoreProvider,ReviewReduxFormProvider } from '../../../../containers'
import "./ModalReviewForm.css";

export class ModalReviewForm extends Component {
	sendReview = ({ text, user, login }) => {
		console.log("check sendReview");
		console.log(text, user, login);
		const { addReviewInList } = this.props; ///////////////переделать и сделать асинхронным
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
		</>
	);

	getFormLayout = ({ isLoading, loginState }) => {
		if (isLoading) return this.loadingLayout();
		else if (loginState) return this.successLayout();
		else return this.normalLayout();
	};

	render() {
		const { closeModal, isLoading, loginStateApp } = this.props;

		return (
			<div className="review-form-layout">
				<div className="review-form-overlay" onClick={closeModal} />
				<form className="review-form-wrapper">
					{this.getFormLayout({ isLoading: isLoading, loginState: loginStateApp })}
				</form>
			</div>
		);
	}
}
