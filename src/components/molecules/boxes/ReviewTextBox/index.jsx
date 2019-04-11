//
import React, { memo } from "react";
import { OpenSansText, VerdanaText } from "../../../../components";
import "./ReviewTextBox.css";

const getAuthorName = (name, surname) => {
	return name && surname 
	? (<VerdanaText text={`${name} ${surname}`} classname="review-text-value" bold />) 
	: (<VerdanaText text={`${name}`} classname="review-text-value" bold />)
}

export const ReviewTextBox = memo(({ review, name, surname, login }) => {
	return (
		<div className="review-text-box-wrapper">
			<div className="review-text-box__main-title">
				<VerdanaText text="Отзывы" classname="main-title" bold />
			</div>
			<div className="review-text-box__text">
				<OpenSansText classname="text-video" text={review} />
			</div>
			<div className="review-text__login-wrapper">
				{getAuthorName(name, surname)}
				<OpenSansText classname="review-login-text" text={login} ligth />
			</div>
		</div>
	);
});

ReviewTextBox.defaultProps = {
	review: "default-review-text",
	name: "default-firtsname",
	login: "default-login",
};
