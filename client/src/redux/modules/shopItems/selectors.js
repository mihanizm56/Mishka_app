import { createSelector } from "reselect";

const getShopItemsList = state => state.shopItemsReducer.shopItems;
const getCartItemsList = state => state.shopItemsReducer.itemsInCart;

export const shopItemsSelector = createSelector(
	[getShopItemsList],
	shopItems => shopItems
);

export const cartItemsSelector = createSelector(
	[getCartItemsList],
	cartItems => cartItems
);
