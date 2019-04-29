import { createSelector } from "reselect";

const getShopItemsList = state => state.shopItemsReducer.items;

export const shopItemsSelector = createSelector(
	[getShopItemsList],
	shopItems => shopItems
);
