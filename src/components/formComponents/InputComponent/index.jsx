// @flow
import React, { Component } from "react";
// import { pure } from "recompose";

type InputComponentProps = {
	text: string,
	className: string,
};

export class InputComponent extends Component<InputComponentProps> {
	static defaultProps = {
		type: "text",
		placeholder: "default placeholder",
	};

	constructor() {
		super();

		this.inputRef = React.createRef();
	}

	componentDidMount() {
		this.props.getRef(this.inputRef);
	}

	render() {
		const { type, className, placeholder, customFontSize, getRef, backgroundColor } = this.props;
		return (
			<input
				ref={this.inputRef}
				type={type}
				className={className}
				placeholder={placeholder}
				style={
					customFontSize
						? { fontSize: customFontSize }
						: null || backgroundColor
						? { backgroundColor: backgroundColor }
						: null
				}
			/>
		);
	}
}
