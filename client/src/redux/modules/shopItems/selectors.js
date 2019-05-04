import { createSelector } from "reselect";

const getShopItemsList = state => state.shopItemsReducer.shopItems;
const getCartItemsList = state => state.shopItemsReducer.itemsInCart;

const getNumberOfItemsInCart = state => {
	let resultSumOfItems = 0;
	const items = Object.values(state.shopItemsReducer.itemsInCart);
	if (items && items.length) {
		items.forEach(({ numberOfItems = 0 }) => (resultSumOfItems += numberOfItems));
	}

	return resultSumOfItems;
};

export const shopItemsSelector = createSelector(
	[getShopItemsList],
	shopItems => shopItems
);

export const cartItemsSelector = createSelector(
	[getCartItemsList],
	cartItems => cartItems
);

export const getNumberOfItemsInCartSelector = createSelector(
	[getNumberOfItemsInCart],
	cartNumberOfItems => cartNumberOfItems
);
