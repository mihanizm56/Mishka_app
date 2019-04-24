//
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { GET_TOP_ITEM } from "../../constants";
import { myFetch } from "../../utils/requests";

export const getTopItemAction = data => ({
	type: GET_TOP_ITEM,
	payload: { ...data },
});

export const fetchTopItemAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetch("/data/topItem")
		.then(data => (data.status !== 200 ? null : data))
		.then(data => (data ? data.json() : null))
		.then(data => (data ? dispatch(getTopItemAction(data)) : dispatch(getTopItemAction({}))))
		.then(dispatch(loadingAppDoneAction()))
		.catch(error => console.warn(error));
};
