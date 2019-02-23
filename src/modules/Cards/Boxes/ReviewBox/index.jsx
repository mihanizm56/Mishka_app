import React from "react";
import { ImageForPage, MainTitle } from "../../../../components";
import { ButtonForReview, ListButtonsBox } from "../../Buttons";
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
			<div className="review__image">
				<ImageForPage image="review-back" configForImage={configForReviewImage} />
			</div>
			{/* <MainTitle text="Отзывы" /> */}
			<div className="review__buttons-wrapper">
				<ButtonForReview />
				<ListButtonsBox />
			</div>
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
