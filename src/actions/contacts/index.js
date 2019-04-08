//
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { GET_CONTACTS } from "../../constants";
import { myFetch } from "../../utils/requests";

export const getContacts = data => ({
	type: GET_CONTACTS,
	payload: { ...data },
});

export const fetchContacts = () => dispatch => {
	dispatch(loadingAppAction());
	myFetch("GET", "localhost:3000/contacts")
		.then(data => dispatch(getContacts(data)))
		.then(dispatch(loadingAppDoneAction()));
};
