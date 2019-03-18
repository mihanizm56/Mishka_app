// @flow
import React from "react";
import { TextForButton } from "../../../components";
import "./ButtonWriteReview.css";

type ButtonWriteReviewType = {
	callback: () => void,
};

export const ButtonWriteReview = ({ callback }: ButtonWriteReviewType) => {
	return (
		<div className="button-write-wrapper" onClick={callback}>
			<TextForButton text="НАПИСАТЬ" />
		</div>
	);
};

ButtonWriteReview.defaultProps = {
	callback: () => console.log("test click on ButtonWriteReview"),
};
