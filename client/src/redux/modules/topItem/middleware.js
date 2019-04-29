import { loadingAppDoneAction, loadingAppAction } from "../appLoading";
import { getTopItemAction } from "./actions";
// import { myFetch } from "../../utils/requests";

export const fetchTopItemAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetch("/data/topItem")
		.then(data => (data.status !== 200 ? null : data))
		.then(data => (data ? data.json() : null))
		.then(data => (data ? dispatch(getTopItemAction(data)) : dispatch(getTopItemAction({}))))
		.then(dispatch(loadingAppDoneAction()))
		.catch(error => console.warn(error));
};
