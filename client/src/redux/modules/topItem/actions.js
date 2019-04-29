import { GET_TOP_ITEM } from "./constants";

export const getTopItemAction = data => ({
	type: GET_TOP_ITEM,
	payload: { ...data },
});
