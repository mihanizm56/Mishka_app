// @flow
import { APP_IS_LOADING, APP_HAS_LOADED } from "../../constants";

export const loadingAppAction = () => {
	setTimeout(() => {
		console.log("test loadingApp");
		return {
			type: APP_IS_LOADING,
		};
	}, 2000)

};

export const loadingAppDoneAction = () => {
	setTimeout(() => {
		console.log("test loadingAppDone");
		return {
			type: APP_HAS_LOADED,
		};
	}, 2000)
};
