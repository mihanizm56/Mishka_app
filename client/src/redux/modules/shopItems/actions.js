import { GET_SHOP_ITEMS } from "./constants";

const getShopItemsAction = data => {
	console.log("getShopItemsAction data", data);
	return {
		type: GET_SHOP_ITEMS,
		payload: data,
	};
};
