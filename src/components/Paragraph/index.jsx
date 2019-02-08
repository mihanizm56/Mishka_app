// @flow
import React, { Node } from "react";
import { pure } from "recompose";

type ParagraphProps = {
	text: string,
	className: string,
};

const ParagraphComponent = ({ text, className }: ParagraphProps): Node => <p className={className}>{text}</p>;

export const Paragraph = pure(ParagraphComponent);
