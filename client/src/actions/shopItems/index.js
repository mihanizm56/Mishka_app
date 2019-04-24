//
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { GET_SHOP_ITEMS } from "../../constants";
import { myFetch } from "../../utils/requests";

const getShopItemsAction = data => {
	console.log("getShopItemsAction data", data);
	return {
		type: GET_SHOP_ITEMS,
		payload: data,
	};
};

export const fetchShopItemsAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetch("/data/shopItems")
		.then(data => (data.status !== 200 ? null : data))
		.then(data => (data ? data.json() : null))
		.then(data => (data ? dispatch(getShopItemsAction(data.items)) : dispatch(getShopItemsAction([]))))
		.then(dispatch(loadingAppDoneAction()));
};
