// @flow
import React, { memo } from "react";
import MainLayout from "../../../../routes/";
import { Footer, Header } from "../";
import { ModalAuthForm } from "../../";
import { Portal, AuthStoreProvider, AuthReduxFormProvider } from "../../../../containers";
import "./MainWrapper.css";

export const MainWrapper = memo(props => {
	const { router, loginState, modalAuthIsOpen, ...restProps } = props;
	//console.log(props);
	//console.log(router);
	return (
		<div className="main-wrapper">
			<AuthStoreProvider>
				<Header route={router} />
			</AuthStoreProvider>
			<MainLayout {...restProps} />
			<Footer />

			{modalAuthIsOpen && (
				<Portal>
					<AuthStoreProvider>
						<AuthReduxFormProvider>
							<ModalAuthForm loginState={loginState} />
						</AuthReduxFormProvider>
					</AuthStoreProvider>
				</Portal>
			)}
		</div>
	);
});
