import React from "react";
import { Paragraph } from "../";
import "./NameForReview.css";

type NameForReviewType = {
	value: string,
};

export const NameForReview = ({ value }: NameForReviewType) => <Paragraph text={value} className="review-text-value" />;

NameForReview.defaultProps = {
	value: "default value",
};
