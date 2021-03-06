import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { rootReducer } from "./rootReducer";

export const history = createBrowserHistory();

export const store = createStore(
	rootReducer(history), // root reducer with router state
	compose(
		applyMiddleware(
			routerMiddleware(history), // for dispatching history actions
			thunk
		),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
