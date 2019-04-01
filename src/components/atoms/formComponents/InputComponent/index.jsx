// @flow
import React, { Component } from "react";

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
		const { type, className, placeholder, customFontSize, getRef, backgroundColor, input } = this.props;
		console.log("check InputComponent input");
		console.log({ ...input });
		return (
			<input
				{...input}
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
