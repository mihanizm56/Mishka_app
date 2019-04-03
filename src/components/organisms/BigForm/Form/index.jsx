import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { Field } from "redux-form";
import { Button, OpenSansText, TextArea, CheckBox, RadioBox, FormTextInputField } from "../../../";
// import { BigCheckBoxContainer, MidCheckBoxContainer, SmallCheckBoxContainer } from "../";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";
import "./BigForm.css";

const backgroundColors = {
	grey: "#F1F1F1",
	default: "#fff",
};

export class BigForm extends Component {
	componentDidMount() {
		console.log("check BigForm props");
		console.log(this.props);
	}

	testFunc = props => {
		console.log("check");
		console.log(props);
	};

	getBigCheckBoxContainer = () => (
		<>
			<div className="buttons-big-first-column">
				<Field component={CheckBox} type="checkbox" name="first_checkbox" text="Белый" />
				<Field component={CheckBox} type="checkbox" name="second_checkbox" text="«Тиффани»" />
			</div>
			<div className="buttons-big-second-column">
				<Field component={CheckBox} type="checkbox" name="third_checkbox" text="Розовый" />
				<Field component={CheckBox} type="checkbox" name="fourth_checkbox" text="Серый" />
			</div>
			<div className="buttons-big-third-column">
				<Field component={CheckBox} type="checkbox" name="fifth_checkbox" text="Черный" />
				<Field component={CheckBox} type="checkbox" name="sixth_checkbox" text="Оранжевый" />
			</div>
		</>
	);

	getMidCheckBoxContainer = () => (
		<>
			<div className="buttons-mid-first-column">
				<Field component={CheckBox} type="checkbox" name="first_checkbox" text="Белый" />
				<Field component={CheckBox} type="checkbox" name="second_checkbox" text="«Тиффани»" />
				<Field component={CheckBox} type="checkbox" name="third_checkbox" text="Розовый" />
			</div>
			<div className="buttons-mid-second-column">
				<Field component={CheckBox} type="checkbox" name="fourth_checkbox" text="Серый" />
				<Field component={CheckBox} type="checkbox" name="fifth_checkbox" text="Черный" />
				<Field component={CheckBox} type="checkbox" name="sixth_checkbox" text="Оранжевый" />
			</div>
		</>
	);

	getSmallCheckBoxContainer = () => (
		<>
			<div className="buttons-small-column">
				<Field component={CheckBox} type="checkbox" name="first_checkbox" text="Белый" />
				<Field component={CheckBox} type="checkbox" name="second_checkbox" text="«Тиффани»" />
				<Field component={CheckBox} type="checkbox" name="third_checkbox" text="Розовый" />
				<Field component={CheckBox} type="checkbox" name="fourth_checkbox" text="Серый" />
				<Field component={CheckBox} type="checkbox" name="fifth_checkbox" text="Черный" />
				<Field component={CheckBox} type="checkbox" name="sixth_checkbox" text="Оранжевый" />
			</div>
		</>
	);

	getBigSendContainer = () => (
		<>
			<Button classname="button-send" text="отправить заказ" type="submit" />
			<OpenSansText classname="form-additional-paragraph" />
		</>
	);

	getMidSendContainer = () => (
		<>
			<Button classname="button-send" text="отправить заказ" />
			<OpenSansText classname="form-additional-paragraph" />
		</>
	);

	getSmallSendContainer = () => (
		<>
			<Button classname="button-send" text="отправить заказ" />
		</>
	);

	render() {
		const { handleSubmit } = this.props;

		return (
			<form name="review" onSubmit={handleSubmit(this.testFunc)}>
				<div className="order-page-container">
					<div className="order-page__text">
						<OpenSansText classname="text-video" text="Мы будем рады воплотить в жизнь ваши пожелания!" />
						<OpenSansText
							classname="text-video"
							text="Заполните простую форму заказа и мы свяжемся с вами, чтобы уточнить детали."
						/>
					</div>
					<div className="order-page-radio-container">
						<div className="radio-container__title">
							<OpenSansText classname="title-form-label-paragraph" bold text="тип" />
						</div>
						<div className="radio-container__buttons">
							<Field component={RadioBox} type="radio" name="form__radiobox" text="Аксессуар для интерьера" value='interier_accessory'/>
							<Field component={RadioBox} type="radio" name="form__radiobox" text="Детская игрушка" value='child_toy' />
						</div>
					</div>
					<div className="order-page-check-container">
						<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM}>
							<div className="background-grey-container background-grey-container__check-container background-grey-container__check-container--middle" />
						</MediaQuery>
						<div className="check-container__title">
							<OpenSansText classname="title-form-label-paragraph" bold text="цвет" />
						</div>
						<div className="check-container__buttons">
							<MediaQuery minWidth={BIG_MEDIA_SIZE}>{this.getBigCheckBoxContainer()}</MediaQuery>
							<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
								{this.getMidCheckBoxContainer()}
							</MediaQuery>
							<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
								{this.getSmallCheckBoxContainer()}
							</MediaQuery>
						</div>
					</div>
					<div className="order-page-name-container">
						<div className="order-page-name-container__title">
							<OpenSansText classname="title-form-label-paragraph" bold text="фио" />
						</div>
						<div className="order-page-name-container__fields">
							<Field component={FormTextInputField} type="text" name="first_fio_field" />
							<Field component={FormTextInputField} type="text" name="second_fio_field" />
							<Field component={FormTextInputField} type="text" name="third_fio_field" />
						</div>
					</div>
					<div className="order-page-contact-container">
						<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM}>
							<div className="background-grey-container background-grey-container__contact-container" />
						</MediaQuery>
						<div className="contact-fields-first-field">
							<div className="contact-fields-first-field__title">
								<OpenSansText classname="title-form-label-paragraph" bold text="тел" />
							</div>
							<div className="contact-fields-first-field__fields">
								<Field
									component={FormTextInputField}
									icon="phone"
									type="text"
									noTitle
									noMarginTop
									backgroundColor={backgroundColors.grey}
									name="contact_phone_field"
								/>
							</div>
						</div>
						<div className="contact-fields-second-field">
							<div className="contact-fields-second-field__title">
								<OpenSansText classname="title-form-label-paragraph" bold text="e-mail" />
							</div>
							<div className="contact-fields-second-field__fields">
								<Field
									component={FormTextInputField}
									icon="mail"
									type="text"
									name="contact_mail_field"
									noTitle
									noMarginTop
									backgroundColor={backgroundColors.grey}
								/>
							</div>
						</div>
					</div>
					<div className="order-page-textarea-container">
						<div className="order-page-textarea-container__title">
							<OpenSansText classname="title-form-label-paragraph" bold text="доп	" />
						</div>
						<div className="order-page-textarea-container__fields">
							<Field component={TextArea} type="text" name="textarea_field" />
						</div>
					</div>
					<div className="order-page-send-container">
						<MediaQuery minWidth={BIG_MEDIA_SIZE}>{this.getBigSendContainer()}</MediaQuery>
						<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
							{this.getMidSendContainer()}
						</MediaQuery>
						<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
							{this.getSmallSendContainer()}
						</MediaQuery>
					</div>
				</div>
			</form>
		);
	}
}
