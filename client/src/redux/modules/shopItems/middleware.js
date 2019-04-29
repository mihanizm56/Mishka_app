import { loadingAppDoneAction, loadingAppAction } from "../appLoading";
import { getShopItemsAction } from "./actions";
import { GET_SHOP_ITEMS } from "./constants";
import { myFetch } from "../../../utils/requests";

export const fetchShopItemsAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetch("/data/shopItems")
		.then(data => (data.status !== 200 ? null : data))
		.then(data => (data ? data.json() : null))
		.then(data => (data ? dispatch(getShopItemsAction(data.items)) : dispatch(getShopItemsAction([]))))
		.then(dispatch(loadingAppDoneAction()));
};
