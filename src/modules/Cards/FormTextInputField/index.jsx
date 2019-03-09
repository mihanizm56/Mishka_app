// @flow
import React, { Component } from "react";
import { FormTextInput, InteractiveSVGIcon } from "../../../components";
import "./FormTextInputField.css";

export class FormTextInputField extends Component {
	static defaultProps = {
		icon: "phone",
		error: false,
	};

	constructor() {
		super();
		this.state = {
			inputIsActive: false,
		};
		this.inputRef = React.createRef();
	}

	inputRef = null;

	focusInput = () => {
		this.setState({ inputIsActive: true });
	};

	blurInput = ({ target }) => {
		this.setState({ inputIsActive: false });
	};

	getInputRef = ref => {
		this.inputRef = ref;
	};

	getClass = (error, active) => {
		let resultClass = "form-text-input-field-wrapper";

		if (error) {
			resultClass += " form-text-input-field-wrapper--error";
		}

		if (active) {
			resultClass += " form-text-input-field-wrapper--active";
		}

		return resultClass;
	};

	render() {
		const { inputIsActive } = this.state;
		const { formatter, icon, text, error } = this.props;

		return (
			<div className={this.getClass(error, inputIsActive)} onClick={this.focusInput} onBlur={this.blurInput}>
				<FormTextInput text={text} getRef={this.getInputRef} />
				{<InteractiveSVGIcon icon={icon} />}
			</div>
		);
	}
}
