// @flow
import { appIsLoading, appHasLoaded } from "../../constants";

export const loadingAppAction = () => {
	console.log("test loadingApp");
	return {
		type: appIsLoading,
	};
};

export const loadingAppDoneAction = () => {
	console.log("test loadingAppDone");
	return {
		type: appHasLoaded,
	};
};
