import { createSelector } from "reselect";

const getShopItemsList = state => state.shopItems;

export const shopItemsSelector = createSelector(
	getShopItemsList,
	shopItems => shopItems
);
