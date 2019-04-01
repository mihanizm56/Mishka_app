import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import "./fonts/index.css";
import { App } from "./containers/App";
import { history } from "./store";
import "normalize.css";

const ROOT_ELEMENT = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	ROOT_ELEMENT
);
