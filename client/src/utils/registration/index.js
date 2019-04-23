import { initializeApp } from "firebase";
import { firebaseConfig } from "../../lib";

export const registerApp = () => {
	initializeApp(firebaseConfig);
};
