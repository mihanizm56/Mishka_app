import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import loginReducer from "../modules/loginReducer";
import appLoadingReducer from "../modules/appLoading";
import shopItemsReducer from "../modules/shopItems";
import userItemsReducer from "../modules/userItems";
import reviewsReducer from "../modules/reviews";
import contactsReducer from "../modules/contacts";
import topItemReducer from "../modules/topItem";
import itemsFiltersReducer from "../modules/itemsFilters";
import modalAuthStateReducer from "../modules/modalAuth";

export const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		loginReducer,
		appLoadingReducer,
		shopItemsReducer,
		userItemsReducer,
		reviewsReducer,
		itemsFiltersReducer,
		contactsReducer,
		topItemReducer,
		modalAuthStateReducer,
	});
