import React from "react";
import { VerdanaText } from "../../../components";
import { Link, Redirect } from "react-router-dom";

const checkLogin = parameter => {
	//console.log(`test checkLogin, parameter = ${parameter}`);
	return parameter ? (
		<>
			<VerdanaText text="This is HiddenPage" classname="main-title" bold/>;
			<Link to="/mainpage">To main page</Link>
		</>
	) : (
		<>
			<Redirect to="/formauth" />
		</>
	);
};

export const HiddenPage = ({ login }) => {
	//console.log("check HiddenPage");
	//console.log(`login = ${login}`);
	return <>{checkLogin(login)}</>;
};
