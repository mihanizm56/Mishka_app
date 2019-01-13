// @flow
import React, { Node } from "react";
import { pure } from "recompose";

type ParagraphProps = {
	text: string,
};

const ParagraphComponent = (props: ParagraphProps): Node => {
	const { text } = props;
	return <p text="Hello MainPage !">{text}</p>;
};

export const Paragraph = pure(ParagraphComponent);
