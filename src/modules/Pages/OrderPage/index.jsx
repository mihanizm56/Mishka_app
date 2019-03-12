import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { FormLabelParagraph, TextForVideo, TextAreaFormComponent } from "../../../components";
import { CheckBox, RadioBox, FormTextInputField } from "../../Cards";
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

					{/* 
					<div className='order-page-contact-container'>

					</div>
					<div className='order-page-textarea-container'>

					</div>
					<div className='order-page-send-container'>

					</div> */}
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
