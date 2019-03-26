// @flow
import React from "react";
import { OpenSansText} from "../../../components";
import "./ButtonWriteReview.css";

type ButtonWriteReviewType = {
	callback: () => void,
};

export const ButtonWriteReview = ({ callback }: ButtonWriteReviewType) => {
	return (
		<div className="button-write-wrapper" onClick={callback}>
			<OpenSansText classname='text-button' bold  text="НАПИСАТЬ" />
		</div>
	);
};

ButtonWriteReview.defaultProps = {
	callback: () => {},
};
