//
import React, { memo } from "react";
import { VerdanaText } from "../..";

type LabelForOrderFormProps = {
	text: string,
};

export const LabelForOrderForm = memo(({ text }: LabelForOrderFormProps) => {
	return <VerdanaText text={text} classname="label-check-box" bold />;
});
