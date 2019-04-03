// @flow
import {getContacts} from '../../constants';

const initialState = {
	email: "info@mimimishkashop.ru",
	address: {
		city: "Санкт-Петербург",
		street: "Большая Конюшенная",
		block: "19/8",
		room: "101",
	},
};

export const contacts = (state = initialState, action) => {
	switch (action.type) {
		case getContacts:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};