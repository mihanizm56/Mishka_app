// @flow
import React from "react";
import { MainTitle, OpenSansText, TextForLoginInReview, NameForReview } from "../../../components";
import "./ReviewTextBox.css";

export const ReviewTextBox = ({ review, name, surname, login }) => {
	return (
		<div className="review-text-box-wrapper">
			<div className="review-text-box__main-title">
				<MainTitle text="Отзывы" />
			</div>
			<div className="review-text-box__text">
				<OpenSansText classname='text-video' text={review} />
			</div>
			<div className="review-text__login-wrapper">
				<NameForReview value={`${name} ${surname}`} />
				<OpenSansText classname='review-login-text' text={login} ligth />
			</div>
		</div>
	);
};

ReviewTextBox.defaultProps = {
	review: "default-review-text",
	name: "default-firtsname",
	surname: "default-surname",
	login: "default-login",
};
