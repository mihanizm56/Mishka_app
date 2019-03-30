// @flow
import React, { Component } from "react";
import { FormTextInput, SVGIcon, FormFieldBoldParagraph, VerdanaText } from "../../../../components";
import { getClass } from "../../../../utils";
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
		const { formatter, icon, text, error, fieldLabelText, noTitle, backgroundColor, noMarginTop } = this.props;
		// console.log("check props FormTextInputField");
		// console.log(this.props);
		return (
			<div className={getClass({ initialClass: "form-text-input-field-wrapper", noMarginTop })}>
				{!noTitle ? (
					<div className="form-text-input-field__label">
						<VerdanaText text={fieldLabelText} classname="form-name-field-label" bold />
					</div>
				) : null}

				<div
					className={getClass({ initialClass: "form-text-input-field__field", inputIsActive, error })}
					onClick={this.focusInput}
					onBlur={this.blurInput}
				>
					<FormTextInput text={text} getRef={this.getInputRef} backgroundColor={backgroundColor} />
					{icon && <SVGIcon icon={icon} />}
				</div>
			</div>
		);
	}
}
