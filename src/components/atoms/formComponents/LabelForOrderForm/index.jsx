// @flow
import React from "react";
import { VerdanaText } from "../../";

type LabelForOrderFormProps = {
	text: string,
};

export const LabelForOrderForm = ({ text }: LabelForOrderFormProps) => {
	return <VerdanaText text={text} classname="label-check-box" bold/>;
};
