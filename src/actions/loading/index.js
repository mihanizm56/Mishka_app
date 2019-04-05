// @flow
import { APP_IS_LOADING, APP_HAS_LOADED } from "../../constants";

export const loadingAppAction = () => {
	console.log("test loadingApp");
	return {
		type: APP_IS_LOADING,
	};
};

export const loadingAppDoneAction = () => {
	console.log("test loadingAppDone");
	return {
		type: APP_HAS_LOADED,
	};
};
