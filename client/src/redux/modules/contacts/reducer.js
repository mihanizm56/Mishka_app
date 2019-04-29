import { GET_CONTACTS } from "./constants";

const initialState = {
	email: "",
	address: {
		city: "",
		street: "",
		block: "",
		room: "",
	},
};

const contactsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

export default contactsReducer;
