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

	componentDidMount() {
		console.log("check FormTextInputField props");
		console.log(this.props);
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
		const {
			formatter,
			icon,
			text,
			error,
			fieldLabelText,
			noTitle,
			backgroundColor,
			noMarginTop,
			...restProps
		} = this.props;
		console.log("check restProps FormTextInputField");
		console.log({ ...restProps });
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
					<FormTextInput text={text} getRef={this.getInputRef} backgroundColor={backgroundColor} {...restProps} />
					{icon && <SVGIcon icon={icon} />}
				</div>
			</div>
		);
	}
}
