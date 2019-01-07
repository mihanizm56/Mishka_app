import { initializeApp } from "firebase";
import { firebaseConfig } from "../libs";

export const registerApp = () => {
	initializeApp(firebaseConfig);
};

export const findTopPrice = items => {
	let result = 0;
	items.forEach(item => {
		if (item.priceOfThisItems > result) result = item.priceOfThisItems;
	});
	return result;
};
