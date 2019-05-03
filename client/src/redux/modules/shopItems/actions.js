import { GET_SHOP_ITEMS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./constants";

export const getShopItemsAction = data => {
	console.log("getShopItemsAction data", data);
	return {
		type: GET_SHOP_ITEMS,
		payload: data,
	};
};

export const addItemToCartAction = itemData => ({ type: ADD_ITEM_TO_CART, payload: itemData });

export const removeItemFromCartAction = id => ({ type: REMOVE_ITEM_FROM_CART, payload: id });
