// @flow
import React, { Node } from "react";
//import { pure } from "recompose";

type ParagraphProps = {
	text: string,
	className: string,
};

export const Paragraph = ({ text, className }: ParagraphProps): Node => <p className={className}>{text}</p>;

//const Paragraph = pure(ParagraphComponent);
