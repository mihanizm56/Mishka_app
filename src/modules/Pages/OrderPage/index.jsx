import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { FormLabelParagraph, TextForVideo, TextAreaFormComponent, FormAdditionalParagraph } from "../../../components";
import { CheckBox, RadioBox, FormTextInputField, ButtonForSendOffer } from "../../Cards";
import "./OrderPage.css";

export class OrderPage extends Component {
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
						<div className="check-container__title">
							<FormLabelParagraph text="цвет" />
						</div>
						<div className="check-container__buttons">
							<MediaQuery minWidth={1201}>
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
							<MediaQuery minWidth={768} maxWidth={1200}>
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
							<MediaQuery minWidth={320} maxWidth={767}>
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
						<div className="contact-fields-first-field">
							<div className="contact-fields-first-field__title">
								<FormLabelParagraph text="тел" />
							</div>
							<div className="contact-fields-first-field__fields">
								<FormTextInputField icon="phone" noTitle />
							</div>
						</div>
						<div className="contact-fields-second-field">
							<div className="contact-fields-second-field__title">
								<FormLabelParagraph text="e-mail" />
							</div>
							<div className="contact-fields-second-field__fields">
								<FormTextInputField icon="mail" noTitle />
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
						<MediaQuery minWidth={1201}>
							<ButtonForSendOffer />
							<FormAdditionalParagraph />
						</MediaQuery>
						<MediaQuery minWidth={768} maxWidth={1200}>
							<ButtonForSendOffer />
							<FormAdditionalParagraph />
						</MediaQuery>
						<MediaQuery minWidth={320} maxWidth={767}>
							<ButtonForSendOffer />
						</MediaQuery>
					</div>
				</div>
			</div>
		);
	}
}

/* <CheckBox />
				<RadioBox />
				<FormLabelParagraph text="фио" />
				<FormTextInputField /> */

OrderPage.defaultProps = {
	arrayOfCheckValues: [
		{ title: "Белый" },
		{ title: "«Тиффани»" },
		{ title: "Розовый" },
		{ title: "Серый" },
		{ title: "Черный" },
		{ title: "Оранжевый" },
	],
};
