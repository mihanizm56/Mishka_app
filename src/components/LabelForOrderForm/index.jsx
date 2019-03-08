// @flow
import React from "react";
import { Paragraph } from "../";
import "./LabelForOrderForm.css";

type LabelForOrderFormProps = {
	text: string,
};

export const LabelForOrderForm = ({ text }: LabelForOrderFormProps) => {
	return <Paragraph text={text} className="label-check-box" />;
};
