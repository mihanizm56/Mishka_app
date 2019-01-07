import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { loginReducer as loginState } from "./loginReducer";
import { appLoading } from "./appLoading";

import { contacts } from "./contacts";
import { shopItems } from "./shopItems";
import { userItems } from "./userItems";
import { topItem } from "./topItem";
import { reviews } from "./reviews";
import { itemsFilters } from "./itemsFilters";

export const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		loginState,
		appLoading,
		contacts,
		shopItems,
		userItems,
		topItem,
		reviews,
		itemsFilters,
	});
