import { loadingAppDoneAction, loadingAppAction } from "../appLoading";
import { getTopItemAction } from "./actions";
// import { myFetch } from "../../utils/requests";

const DEFAULT_TOP_ITEM_VALUE = {
	name: "Нет данных",
	description: "Нет данных",
	price: "Нет данных",
	image: "Нет данных",
	characteristics: [
		{
			name: "Нет данных",
			value: "Нет данных",
		},
		{
			name: "Нет данных",
			value: "Нет данных",
		},
		{
			name: "Нет данных",
			value: "Нет данных",
		},
	],
};

export const fetchTopItemAction = () => dispatch => {
	dispatch(loadingAppAction());
	fetch("/data/topItem")
		.then(data => data.json())
		.then(data => dispatch(getTopItemAction(data)))
		.then(dispatch(loadingAppDoneAction()))
		.catch(error => console.warn(error) || dispatch(getTopItemAction(DEFAULT_TOP_ITEM_VALUE)));
};
