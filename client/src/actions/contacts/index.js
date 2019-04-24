//
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { GET_CONTACTS } from "../../constants";

export const getContactsAction = data => ({
	type: GET_CONTACTS,
	payload: { ...data },
});

export const fetchContactsAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetch("/data/contacts")
		.then(data => (data.status !== 200 ? null : data))
		.then(data => (data ? data.json() : null))
		.then(data => (data ? dispatch(getContactsAction(data)) : dispatch(getContactsAction({}))))
		.then(dispatch(loadingAppDoneAction()))
		.catch(error => console.warn(error));
};