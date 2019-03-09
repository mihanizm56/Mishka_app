// @flow
import React, { Component } from "react";
import { FormTextInput, InteractiveSVGIcon } from "../../../components";
import { getClass } from "../../../helpers";
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

	render() {
		const { inputIsActive } = this.state;
		const { formatter, icon, text, error } = this.props;

		return (
			<div
				className={getClass("form-text-input-field-wrapper", inputIsActive, error)}
				onClick={this.focusInput}
				onBlur={this.blurInput}
			>
				<FormTextInput text={text} getRef={this.getInputRef} />
				{<InteractiveSVGIcon icon={icon} />}
			</div>
		);
	}
}
