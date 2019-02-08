import { changePageType } from "../../constants";

const initState = {
	page: null,
};

export const appPage = (state = initState, action) => {
	switch (action.type) {
		case changePageType:
			return { ...state, page: action.payload };

		default:
			return state;
	}
};
