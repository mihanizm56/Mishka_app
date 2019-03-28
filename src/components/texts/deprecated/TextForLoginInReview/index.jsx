// @flow
import React from "react";
import { Paragraph } from "../";
import "./TextForLoginInReview.css";

type TextForLoginInReviewProps = {
	text: string,
};

export const TextForLoginInReview = ({ text }: TextForLoginInReviewProps) => (
	<Paragraph text={text} className="review-login-text" />
);
