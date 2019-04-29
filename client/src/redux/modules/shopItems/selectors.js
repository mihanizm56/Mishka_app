import { createSelector } from "reselect";

const getShopItemsList = state => state.shopItems.items;

export const shopItemsSelector = createSelector(
	[getShopItemsList],
	shopItems => shopItems
);
