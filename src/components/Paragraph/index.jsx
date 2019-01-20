// @flow
import React, { Node } from "react";
//import { pure } from "recompose";

type ParagraphProps = {
	text: string,
};

export const Paragraph = ({ text }: ParagraphProps): Node => <p>{text}</p>;

//const Paragraph = pure(ParagraphComponent);
