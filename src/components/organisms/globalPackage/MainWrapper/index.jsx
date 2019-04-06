// @flow
import React, { memo } from "react";
import MainLayout from "../../../../routes/";
import { Footer, Header } from "../";
import { ModalAuthForm } from "../../FormComponents";
import { Portal } from "../../../../containers";
import "./MainWrapper.css";

export const MainWrapper = memo(props => {
	const { router, userIsLoggedIn, modalAuthIsOpen, ...restProps } = props;
	//console.log(props);
	//console.log(router);
	return (
		<div className="main-wrapper">
			<Header route={router} />
			<MainLayout {...restProps} />
			<Footer />

			{/* {modalAuthIsOpen && (
				<Portal>
					<ModalAuthForm />
				</Portal>
			)} */}
		</div>
	);
});
