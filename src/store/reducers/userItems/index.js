import { ADD_USER_ITEM, REMOVE_USER_ITEM } from "../../constants";

const initialState = {
	items: [{}],
};

export const userItems = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER_ITEM:
			return { ...state, items: action.payload };
		case REMOVE_USER_ITEM:
			return { ...state, items: action.payload };

		default:
			return state;
	}
};
