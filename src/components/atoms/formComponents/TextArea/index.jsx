//
import React, { Node, memo } from "react";
import { getClass } from "../../../../utils";
import "./TextArea.css";

type TextAreaProps = {
	placeholder: string,
	width: string,
	height: string,
};

export const TextArea = memo(
	({
		placeholder,
		customStyle,
		isError,
		input,
		noPadding,
		noBorder,
		withBorderRadius,
		customPadding,
	}: TextAreaProps): Node => (
		<textarea
			{...input}
			style={customStyle}
			className={getClass({
				initialClass: "textarea",
				error: isError,
				noPadding,
				noBorder,
				withBorderRadius,
				customPadding,
			})}
			placeholder={placeholder}
		/>
	)
);

TextArea.defaultProps = {
	placeholder: "default textarea placeholder",
};
