import React, { Component } from "react";
import { FormLabelParagraph } from "../../../components";
import { CheckBox, RadioBox, FormTextInputField } from "../../Cards";
import "./OrderPage.css";

export class OrderPage extends Component {
	render() {
		return (
			<>
				<CheckBox />
				<RadioBox />
				<FormLabelParagraph text="фио" />
				<FormTextInputField />
			</>
		);
	}
}
