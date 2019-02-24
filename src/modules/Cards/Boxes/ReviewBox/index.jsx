import React from "react";
import MediaQuery from "react-responsive";
import { ImageForPage } from "../../../../components";
import { ButtonForReview, ListButtonsBox } from "../../Buttons";
import { ReviewTextBox } from "../";
import "./ReviewBox.css";

const configForReviewImage = {
	widthMiddle: "350px",
	heightMiddle: "457px",
	widthBig: "350px",
	heightBig: "457px",
};

export const ReviewBox = ({ review, name, surname, login }) => {
	return (
		<div className="review-wrapper">
			<MediaQuery minWidth={1201}>
				<div className="review__image">
					<ImageForPage image="review-back" configForImage={configForReviewImage} />
				</div>
				<div className="review__text-box">
					<ReviewTextBox review={review} name={name} surname={surname} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<ButtonForReview />
					<ListButtonsBox />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<div className="review__image">
					<ImageForPage image="review-back" configForImage={configForReviewImage} />
				</div>
				<div className="review__text-box">
					<ReviewTextBox review={review} name={name} surname={surname} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<ButtonForReview />
					<ListButtonsBox />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				<div className="review__image">
					<ImageForPage image="review-back" configForImage={configForReviewImage} />
				</div>
				<div className="review__text-box">
					<ReviewTextBox review={review} name={name} surname={surname} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<ListButtonsBox />
					<ButtonForReview />
				</div>
			</MediaQuery>
		</div>
	);
};

ReviewBox.defaultProps = {
	review:
		"Я молодая мама, но все равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке и мои фотографии сразу стали более стильнее, а также набирают больше лайков!",
	name: "Анастасия",
	surname: "Красильникова",
	login: "@misssssiskras",
};
