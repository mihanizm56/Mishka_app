//
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { GET_SHOP_ITEMS } from "../../constants";
import { myFetch } from "../../utils/requests";

export const getShopItems = data => ({
	type: GET_SHOP_ITEMS,
	payload: { ...data },
});

export const fetchItems = () => dispatch => {
	dispatch(loadingAppAction());
	myFetch("GET", "localhost:10000/contacts")
		.then(data => dispatch(getShopItems(data)))
		.then(dispatch(loadingAppDoneAction()));
};
