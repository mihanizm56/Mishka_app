import { GET_SHOP_ITEMS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, GET_CART_ITEMS } from "./constants";

const initialState = {
	shopItems: [],
	itemsInCart: [],
};

const shopItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SHOP_ITEMS:
			return { ...state, shopItems: [...action.payload] };
		case GET_CART_ITEMS:
			return { ...state, itemsInCart: [...action.payload] };
		case ADD_ITEM_TO_CART:
			return {
				...state,
				itemsInCart: state.itemsInCart.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							counter: ++item.counter,
						};
					} else {
						return item;
					}
				}),
			};
		case REMOVE_ITEM_FROM_CART:
			return {
				...state,
				itemsInCart: state.itemsInCart.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							counter: --item.counter,
						};
					} else {
						return item;
					}
				}),
			};

		default:
			return state;
	}
};

export default shopItemsReducer;
