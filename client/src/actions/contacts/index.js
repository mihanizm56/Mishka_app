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
		.then(data => data.json())
		.then(data => dispatch(getContactsAction(data)))
		.then(dispatch(loadingAppDoneAction()));
};
