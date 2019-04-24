import { GET_TOP_ITEM } from "../../../constants";

const initialState = {
	name: "",
	description: "",
	price: "",
	image: "",
	characteristics: [
		{
			name: "",
			value: "",
		},
		{
			name: "",
			value: "",
		},
		{
			name: "",
			value: "",
		},
	],
};

export const topItem = (state = initialState, action) => {
	switch (action.type) {
		case GET_TOP_ITEM:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};
