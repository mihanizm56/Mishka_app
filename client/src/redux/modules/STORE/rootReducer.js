import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { loginReducer as loginStateReducer } from "../loginReducer";
import { appLoadingReducer } from "../appLoading";
import { shopItemsReducer } from "../shopItems";
import { userItemsReducer } from "../userItems";
import { reviewsReducer } from "../reviews";
import { contactsReducer } from "../contacts";
import { topItemReducer } from "../topItem";
import { itemsFiltersReducer } from "../itemsFilters";
import { modalAuthStateReducer } from "../modalAuth";

export const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		loginStateReducer,
		appLoadingReducer,
		shopItemsReducer,
		userItemsReducer,
		reviewsReducer,
		itemsFiltersReducer,
		contactsReducer,
		topItemReducer,
		modalAuthStateReducer,
	});
