import { AUTH_MODAL_OPEN, AUTH_MODAL_CLOSE } from "./constants";

export const openAuthModalAction = () => {
	// console.log("test openAuthModalAction");
	return {
		type: AUTH_MODAL_OPEN,
	};
};

export const closeAuthModalAction = () => {
	// console.log("test closeAuthModalAction");
	return {
		type: AUTH_MODAL_CLOSE,
	};
};
