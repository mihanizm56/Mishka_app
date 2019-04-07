import { LOGIN_SUCCESS, SIGN_OUT } from "../../constants";

const initState = {
	login: false,
};

export const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return { ...state, login: true };
		case SIGN_OUT:
			return { ...state, login: false };

		default:
			return state;
	}
};
