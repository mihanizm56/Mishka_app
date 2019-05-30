import { loadingAppDoneAction, loadingAppAction } from "../appLoading";
import { resetUserCartAction, getShopItemsAction, addItemToCartAction, getUserCartAction } from "./actions";
import { GET_SHOP_ITEMS } from "./constants";
import { fetchPostRequest, fetchGetRequest } from "../../../services";

export const fetchShopItemsAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetchGetRequest("api/shopItems")
		.then(data => (data.status !== 200 ? null : data))
		.then(data => (data ? data.json() : null))
		.then(data => (data ? dispatch(getShopItemsAction(data.items)) : dispatch(getShopItemsAction([]))))
		.then(dispatch(loadingAppDoneAction()));
};

export const fetchAddItemInBasketAction = itemData => dispatch => {
	fetchPostRequest("api/cartItems", { id: itemData.id })
		.then(data => data.json())
		.then(data => console.log("done", data))
		.then(() => dispatch(addItemToCartAction(itemData)))
		.catch(error => {
			console.log("get error", error);
			dispatch(resetUserCartAction());
		});
};

export const fetchCartItemsAction = () => dispatch => {
	fetchGetRequest("api/cartItems")
		.then(data => (data.status !== 200 ? null : data))
		.then(data => (data ? data.json() : null))
		.then(
			data =>
				console.log("test get cart items", data) ||
				(data ? dispatch(getUserCartAction(data)) : dispatch(getUserCartAction({})))
		)
		.catch(error => {
			console.log("error when getting cart items", error);
			dispatch(resetUserCartAction());
		});
};
