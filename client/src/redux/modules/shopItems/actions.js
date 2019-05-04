import { RESET_CART_ITEMS, GET_SHOP_ITEMS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, GET_CART_ITEMS } from "./constants";

export const getShopItemsAction = data => {
	// console.log("getShopItemsAction data", data);
	return {
		type: GET_SHOP_ITEMS,
		payload: data,
	};
};

export const getUserCartAction = data => {
	// console.log("getShopItemsAction data", data);
	return {
		type: GET_CART_ITEMS,
		payload: data,
	};
};

export const addItemToCartAction = itemData => ({ type: ADD_ITEM_TO_CART, payload: itemData });

export const removeItemFromCartAction = id => ({ type: REMOVE_ITEM_FROM_CART, payload: id });

export const resetUserCartAction = data => {
	// console.log("getShopItemsAction data", data);
	return {
		type: RESET_CART_ITEMS,
	};
};
