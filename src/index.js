import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import "./fonts/index.css";
import App from "./containers/app/";
import { history } from "./store";
import "normalize.css";

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);
