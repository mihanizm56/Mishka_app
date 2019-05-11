import { loadingAppDoneAction, loadingAppAction } from "../appLoading";
import { GET_CONTACTS } from "./constants";

export const getContactsAction = data => ({
	type: GET_CONTACTS,
	payload: { ...data },
});
