import React from "react";
import { Router } from "../../../router";
import { Footer, Header } from "../";
import "./MainWrapper.css";

export const MainWrapper = props => {
	const { router, ...restProps } = props;
	//console.log(props);
	//console.log(router);
	return (
		<div className="main-wrapper">
			<Header route={router} />
			<Router {...restProps} />
			<Footer />
		</div>
	);
};
