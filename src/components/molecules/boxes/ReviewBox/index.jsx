// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ImageForPage } from "../../../../components";
import { ReviewTextBox, ListButtonsBox } from "../";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";
import "./ReviewBox.css";

import { Button } from "../../../atoms/buttons";

const configForReviewImage = {
	widthMiddle: "350px",
	heightMiddle: "457px",
	widthBig: "350px",
	heightBig: "457px",
};

// type ReviewBoxPropTypes = { review, name, surname, login, onNextClick, onPrevClick }

export const ReviewBox = (props: ReviewBoxPropTypes) => {
	console.log("ReviewBox props");
	console.log(props);
	const { review, name, surname, login, onNextClick, onPrevClick } = props;
	return (
		<div className="review-wrapper">
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<div className="review__image">
					<ImageForPage image="review-back" configForImage={configForReviewImage} />
				</div>
				<div className="review__text-box">
					<ReviewTextBox review={review} name={name} surname={surname} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<Button classname="button-write-wrapper" text="написать" />
					<ListButtonsBox onNextClick={onNextClick} onPrevClick={onPrevClick} />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<div className="review__image">
					<ImageForPage image="review-back" configForImage={configForReviewImage} />
				</div>
				<div className="review__text-box">
					<ReviewTextBox review={review} name={name} surname={surname} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<Button classname="button-write-wrapper" text="написать" />
					<ListButtonsBox onNextClick={onNextClick} onPrevClick={onPrevClick} />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<div className="review__image">
					<ImageForPage image="review-back" configForImage={configForReviewImage} />
				</div>
				<div className="review__text-box">
					<ReviewTextBox review={review} name={name} surname={surname} login={login} />
				</div>
				<div className="review__buttons-wrapper">
					<ListButtonsBox onNextClick={onNextClick} onPrevClick={onPrevClick} />
					<Button classname="button-write-wrapper" text="написать" />
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
