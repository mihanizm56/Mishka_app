//
import React, { memo } from "react";
import {MainLayout} from "../../../../routes/";
import { Footer, Header } from "../";
import { ModalAuthForm, ModalReviewForm } from "../../";
import {
	ModalAuthPortal,
	AuthStoreProvider,
	AuthReduxFormProvider,
	ReviewsStoreProvider,
	ReviewsReduxFormProvider,
	ModalPortal,
} from "../../../../containers";
import "./MainWrapper.css";

export const MainWrapper = memo(props => {
	const { router, loginState, modalAuthIsOpen, modalReviewIsOpen, ...restProps } = props;
	const closeSmallMenu = modalAuthIsOpen || modalReviewIsOpen;
	// console.log(props);
	//console.log(router);
	return (
		<div className="main-wrapper">
			<AuthStoreProvider>
				<Header route={router} loginState={loginState} closeSmallMenu={closeSmallMenu}/>
			</AuthStoreProvider>
			<MainLayout {...restProps} />
			<Footer />

			{modalAuthIsOpen && (
				<ModalPortal show={modalAuthIsOpen}>
					<AuthStoreProvider>
						<AuthReduxFormProvider>
							<ModalAuthForm loginState={loginState} />
						</AuthReduxFormProvider>
					</AuthStoreProvider>
				</ModalPortal>
			)}

			{modalReviewIsOpen && (
				<ModalPortal show={modalReviewIsOpen}>
					<ReviewsStoreProvider>
						<ReviewsReduxFormProvider>
							<ModalReviewForm />
						</ReviewsReduxFormProvider>
					</ReviewsStoreProvider>
				</ModalPortal>
			)}
		</div>
	);
});
