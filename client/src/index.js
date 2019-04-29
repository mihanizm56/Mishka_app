import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import { ConnectedRouter } from "connected-react-router";
import { App } from "./containers/App";
import "./styles/main.css";
import "./fonts/index.css";

const ROOT_ELEMENT = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	ROOT_ELEMENT
);
