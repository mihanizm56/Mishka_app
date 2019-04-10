import {
	ADD_THE_REVIEW,
	GET_REVIEWS,
	OPEN_MODAL_REVIEW,
	CLOSE_MODAL_REVIEW,
	SET_SENDING_STATE,
} from "../../../constants";

const initialState = {
	reviewList: [
		{
			text:
				"Я молодая мама, но все равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке и мои фотографии сразу стали более стильнее, а также набирают больше лайков!",
			user: "Анастасия Красильникова",
			login: "@misssssiskras",
		},
		{
			text: "Мне очень понравилось качество изделий",
			user: "Михаил Кожевников",
			login: "@mihanizm56",
		},
		{
			text: "Первое, что мне запомнилось - клёвый и интересный сайт! Потом купила первую игрушку и понеслась!",
			user: "Анастасия Зивинская",
			login: "@nasiwin",
		},
	],
	modalReviewsState: true,
	sendingState: false,
};

export const reviews = (state = initialState, action) => {
	switch (action.type) {
		case ADD_THE_REVIEW:
			return { ...state, reviewList: action.payload };
		case OPEN_MODAL_REVIEW:
			return { ...state, modalReviewsState: true };
		case CLOSE_MODAL_REVIEW:
			return { ...state, modalReviewsState: false };
		case SET_SENDING_STATE:
			return { ...state, sendingState: action.payload };
		case GET_REVIEWS:
			return { ...state, reviewList: action.payload };

		default:
			return state;
	}
};
