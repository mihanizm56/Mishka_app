// @flow
import React, { Node } from "react";
//import { pure } from "recompose";

type ParagraphProps = {
	text: string,
	className: string,
};

export const Paragraph = ({ text, className, customFontSize }: ParagraphProps): Node => (
	<p className={className} style={customFontSize ? { fontSize: customFontSize } : null}>
		{text}
	</p>
);

//const Paragraph = pure(ParagraphComponent);
