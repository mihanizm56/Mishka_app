// @flow
import React from "react";
import { MainLayout } from "../../../../routes/";
import { Footer, Header } from "../";
import "./MainWrapper.css";

export const MainWrapper = props => {
	const { router, ...restProps } = props;
	//console.log(props);
	//console.log(router);
	return (
		<div className="main-wrapper">
			<Header route={router} />
			<MainLayout {...restProps} />
			<Footer />
		</div>
	);
};
