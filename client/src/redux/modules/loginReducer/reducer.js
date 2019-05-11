import { LOGIN_SUCCESS, SIGN_OUT, SAVE_NAME, CLEAR_NAME, CLEAR_ERRORS } from "./constants";
import { errors } from "../../../constants";

const initState = {
	login: localStorage.login || false,
	name: localStorage.userName || "",
	error: null,
};

const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return { ...state, login: true };
		case SIGN_OUT:
			return { ...state, login: false };
		case SAVE_NAME:
			return { ...state, name: action.payload };
		case CLEAR_NAME:
			return { ...state, name: action.payload };
		case errors.NETWORK_ERROR:
			return { ...state, error: errors.NETWORK_ERROR };
		case CLEAR_ERRORS:
			return { ...state, error: null };

		default:
			return state;
	}
};

export default loginReducer;
