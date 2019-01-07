import { addUserItem, removeUserItem } from "../../constants";

const initialState = {
	items: [{}],
};

export const userItems = (state = initialState, action) => {
	switch (action.type) {
		case addUserItem:
			return { ...state, items: action.payload };
		case removeUserItem:
			return { ...state, items: action.payload };

		default:
			return state;
	}
};
