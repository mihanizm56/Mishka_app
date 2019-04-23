import { AUTH_MODAL_OPEN, AUTH_MODAL_CLOSE } from "../../../constants";

const initState = {
	authModelOpened: false,
};

export const modalAuthStateReducer = (state = initState, action) => {
	switch (action.type) {
		case AUTH_MODAL_OPEN:
			return { ...state, authModelOpened: true };
		case AUTH_MODAL_CLOSE:
			return { ...state, authModelOpened: false };

		default:
			return state;
	}
};
