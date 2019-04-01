import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { loginReducer as loginState } from "./loginReducer";
import { appLoading } from "./appLoading";
import { shopItems } from "./shopItems";
import { userItems } from "./userItems";
import { reviews } from "./reviews";
import { contacts } from "./contacts";
import { topItem } from "./topItem";
import { itemsFilters } from "./itemsFilters";

export const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		loginState,
		appLoading,
		shopItems,
		userItems,
		reviews,
		itemsFilters,
		contacts,
		topItem,
	});
