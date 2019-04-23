import { LOGIN_SUCCESS, SIGN_OUT, SAVE_NAME, CLEAR_NAME } from "../../../constants";

const initState = {
	login: false,
	name: "",
};

export const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return { ...state, login: true };
		case SIGN_OUT:
			return { ...state, login: false };
		case SAVE_NAME:
			return { ...state, name: action.payload };
		case CLEAR_NAME:
			return { ...state, name: action.payload };

		default:
			return state;
	}
};
