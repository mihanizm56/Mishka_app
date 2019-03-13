// @flow
import React, { Component } from "react";
import { FormTextInput, InteractiveSVGIcon, FormFieldBoldParagraph } from "../../../components";
import { getClass } from "../../../helpers";
import "./FormTextInputField.css";

export class FormTextInputField extends Component {
	static defaultProps = {
		icon: null,
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
		const { formatter, icon, text, error, fieldLabelText, noTitle } = this.props;

		return (
			<div className="form-text-input-field-wrapper">
				{!noTitle ? (
					<div className="form-text-input-field__label">
						<FormFieldBoldParagraph text={fieldLabelText} />
					</div>
				) : null}

				<div
					className={getClass("form-text-input-field__field", inputIsActive, error)}
					onClick={this.focusInput}
					onBlur={this.blurInput}
				>
					<FormTextInput text={text} getRef={this.getInputRef} />
					{icon && <InteractiveSVGIcon icon={icon} />}
				</div>
			</div>
		);
	}
}
