import { RESET_CART_ITEMS, GET_SHOP_ITEMS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, GET_CART_ITEMS } from "./constants";

const initialState = {
	shopItems: [],
	itemsInCart: {},
};

const getIncrementedNumberOfItems = item => (item ? item.numberOfItems + 1 : 1);

const getDecrementedNumberOfItems = item => (item ? item.numberOfItems + 1 : 1);

const shopItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SHOP_ITEMS:
			return { ...state, shopItems: [...action.payload] };
		case GET_CART_ITEMS:
			return { ...state, itemsInCart: { ...action.payload } };
		case ADD_ITEM_TO_CART:
			return {
				...state,
				itemsInCart: {
					...state.itemsInCart,
					[action.payload.id]: {
						...action.payload,
						numberOfItems: getIncrementedNumberOfItems(state.itemsInCart[action.payload.id]),
					},
				},
			};
		case REMOVE_ITEM_FROM_CART:
		case RESET_CART_ITEMS:
			return {
				...state,
				itemsInCart: {},
			};
		default:
			return state;
	}
};

export default shopItemsReducer;
