// @flow
import React from "react";
import { TextForButton } from "../../../components";
import "./ButtonForReview.css";

type ButtonForReviewType = {
	callback: () => void,
};

export const ButtonForReview = ({ callback }: ButtonForReviewType) => {
	return (
		<div className="button-review-wrapper" onClick={callback}>
			<TextForButton text="НАПИСАТЬ" />
		</div>
	);
};

ButtonForReview.defaultProps = {
	callback: () => console.log("test click on ButtonForReview"),
};
