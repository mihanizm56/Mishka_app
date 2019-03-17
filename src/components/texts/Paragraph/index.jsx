// @flow
import React, { Node } from "react";

type ParagraphProps = {
	text: string,
	className: string,
};

export const Paragraph = ({ text, className, customFontSize, title }: ParagraphProps): Node => (
	<p className={className} title={title} style={customFontSize ? { fontSize: customFontSize } : null}>
		{text}
	</p>
);

//export const Paragraph = pure(ParagraphComponent);
