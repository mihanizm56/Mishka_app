import { APP_IS_LOADING, APP_HAS_LOADED } from "../../../constants";

const initState = {
	loading: false,
};

export const appLoading = (state = initState, action) => {
	switch (action.type) {
		case APP_IS_LOADING:
			return { ...state, loading: true };
		case APP_HAS_LOADED:
			return { ...state, loading: false };

		default:
			return state;
	}
};
