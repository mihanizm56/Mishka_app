//
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { GET_TOP_ITEM } from "../../constants";
import { myFetch } from "../../utils/requests";

export const getTopItem = data => ({
	type: GET_TOP_ITEM,
	payload: { ...data },
});

export const fetchTopItem = () => dispatch => {
	dispatch(loadingAppAction());
	myFetch("GET", "localhost:3000/contacts")
		.then(data => dispatch(getTopItem(data)))
		.then(dispatch(loadingAppDoneAction()));
};
