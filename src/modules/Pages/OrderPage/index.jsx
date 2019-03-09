import React, { Component } from "react";
import { FormLabelParagraph, TextForVideo } from "../../../components";
import { CheckBox, RadioBox, FormTextInputField } from "../../Cards";
import "./OrderPage.css";

export class OrderPage extends Component {
	render() {
		return (
			<div className='order-page-wrapper'>
				<div className='order-page-container'>
					<div className='order-page__text'>
							<TextForVideo text='Мы будем рады воплотить в жизнь ваши пожелания!'/>
							<TextForVideo text='Заполните простую форму заказа и мы свяжемся с вами, чтобы уточнить детали.'/>
					</div>
					<div className='order-page-radio-container'>

					</div>
					<div className='order-page-check-container'>

					</div>
					<div className='order-page-name-container'>

					</div>
					<div className='order-page-contact-container'>

					</div>
					<div className='order-page-textarea-container'>

					</div>
					<div className='order-page-send-container'>

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