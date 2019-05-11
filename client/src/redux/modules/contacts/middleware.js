import { loadingAppDoneAction, loadingAppAction } from "../appLoading";
import { getContactsAction } from "./actions";
import { GET_CONTACTS } from "./constants";
import { fetchGetRequest } from "../../../utils/requests";

export const fetchContactsAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetchGetRequest("api/contacts")
		.then(data => data.json())
		.then(data => (data ? dispatch(getContactsAction(data)) : dispatch(getContactsAction({}))))
		.then(dispatch(loadingAppDoneAction()))
		.catch(error => console.warn(error));
};
