import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { FormLabelParagraph, TextForVideo, TextAreaFormComponent, FormAdditionalParagraph } from "../../../components";
import { FormTextInputField } from "../../cards";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";
import { ButtonForSendOffer } from "../../../components";
import { CheckBox, RadioBox } from "../../boxes";
import "./OrderPage.css";

const backgroundColors = {
	grey: "#F1F1F1",
	default: "#fff",
};

export class OrderPage extends Component {
	static defaultProps = {
		arrayOfCheckValues: [
			{ title: "Белый" },
			{ title: "«Тиффани»" },
			{ title: "Розовый" },
			{ title: "Серый" },
			{ title: "Черный" },
			{ title: "Оранжевый" },
		],
	};

	componentDidMount() {
		console.log("test OrderPage props");
		console.log(this.props);
	}

	render() {
		const { arrayOfCheckValues } = this.props;
		return (
			<div className="order-page-wrapper">
				<div className="order-page-container">
					<div className="order-page__text">
						<TextForVideo text="Мы будем рады воплотить в жизнь ваши пожелания!" />
						<TextForVideo text="Заполните простую форму заказа и мы свяжемся с вами, чтобы уточнить детали." />
					</div>
					<div className="order-page-radio-container">
						<div className="radio-container__title">
							<FormLabelParagraph text="тип" />
						</div>
						<div className="radio-container__buttons">
							<RadioBox text="Аксессуар для интерьера" />
							<RadioBox text="Детская игрушка" />
						</div>
					</div>
					<div className="order-page-check-container">
						<MediaQuery minWidth={BIG_MEDIA_SIZE}>
							<div className="background-grey-container background-grey-container__check-container background-grey-container__check-container--big" />
						</MediaQuery>
						<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
							<div className="background-grey-container background-grey-container__check-container background-grey-container__check-container--middle" />
						</MediaQuery>
						<div className="check-container__title">
							<FormLabelParagraph text="цвет" />
						</div>
						<div className="check-container__buttons">
							<MediaQuery minWidth={BIG_MEDIA_SIZE}>
								<div className="buttons-big-first-column">
									<CheckBox text="Белый" />
									<CheckBox text="«Тиффани»" />
								</div>
								<div className="buttons-big-second-column">
									<CheckBox text="Розовый" />
									<CheckBox text="Серый" />
								</div>
								<div className="buttons-big-third-column">
									<CheckBox text="Черный" />
									<CheckBox text="Оранжевый" />
								</div>
							</MediaQuery>
							<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
								<div className="buttons-mid-first-column">
									<CheckBox text="Белый" />
									<CheckBox text="«Тиффани»" />
									<CheckBox text="Розовый" />
								</div>
								<div className="buttons-mid-second-column">
									<CheckBox text="Серый" />
									<CheckBox text="Черный" />
									<CheckBox text="Оранжевый" />
								</div>
							</MediaQuery>
							<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
								<div className="buttons-small-column">
									<CheckBox text="Белый" />
									<CheckBox text="«Тиффани»" />
									<CheckBox text="Розовый" />
									<CheckBox text="Серый" />
									<CheckBox text="Черный" />
									<CheckBox text="Оранжевый" />
								</div>
							</MediaQuery>
						</div>
					</div>
					<div className="order-page-name-container">
						<div className="order-page-name-container__title">
							<FormLabelParagraph text="фио" />
						</div>
						<div className="order-page-name-container__fields">
							<FormTextInputField />
							<FormTextInputField />
							<FormTextInputField />
						</div>
					</div>
					<div className="order-page-contact-container">
						<MediaQuery minWidth={BIG_MEDIA_SIZE}>
							<div className="background-grey-container background-grey-container__contact-container" />
						</MediaQuery>
						<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
							<div className="background-grey-container background-grey-container__contact-container" />
						</MediaQuery>
						<div className="contact-fields-first-field">
							<div className="contact-fields-first-field__title">
								<FormLabelParagraph text="тел" />
							</div>
							<div className="contact-fields-first-field__fields">
								<FormTextInputField icon="phone" noTitle noMarginTop backgroundColor={backgroundColors.grey} />
							</div>
						</div>
						<div className="contact-fields-second-field">
							<div className="contact-fields-second-field__title">
								<FormLabelParagraph text="e-mail" />
							</div>
							<div className="contact-fields-second-field__fields">
								<FormTextInputField icon="mail" noTitle noMarginTop backgroundColor={backgroundColors.grey} />
							</div>
						</div>
					</div>
					<div className="order-page-textarea-container">
						<div className="order-page-textarea-container__title">
							<FormLabelParagraph text="доп	" />
						</div>
						<div className="order-page-textarea-container__fields">
							<TextAreaFormComponent />
						</div>
					</div>
					<div className="order-page-send-container">
						<MediaQuery minWidth={BIG_MEDIA_SIZE}>
							<ButtonForSendOffer />
							<FormAdditionalParagraph />
						</MediaQuery>
						<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
							<ButtonForSendOffer />
							<FormAdditionalParagraph />
						</MediaQuery>
						<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
							<ButtonForSendOffer />
						</MediaQuery>
					</div>
				</div>
			</div>
		);
	}
}
