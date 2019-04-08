//
import React, { PureComponent } from "react";

type InputComponentProps = {
	text: string,
	className: string,
};

export class InputComponent extends PureComponent<InputComponentProps> {
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
		const { type, className, placeholder, customFontSize, backgroundColor, input, autocompleteOff } = this.props;
		// console.log("check InputComponent input");
		// console.log({ ...input });
		const dragOff = type === "password" ? true : false;
		return (
			<input
				{...input}
				ref={this.inputRef}
				type={type}
				className={className}
				placeholder={placeholder}
				autoComplete={autocompleteOff && "off"}
				onDrop={dragOff ? event => event.preventDefault() : null}
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
