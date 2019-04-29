import { GET_SHOP_ITEMS } from "./constants";

const initialState = [];

export const shopItems = (state = initialState, action) => {
	switch (action.type) {
		case GET_SHOP_ITEMS:
			return { ...state, items: [...action.payload] };

		default:
			return state;
	}
};
