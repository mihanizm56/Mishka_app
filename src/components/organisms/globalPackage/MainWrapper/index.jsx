//
import React, { memo } from "react";
import MainLayout from "../../../../routes/";
import { Footer, Header } from "../";
import { ModalAuthForm, ModalReviewForm } from "../../";
import {
	ModalAuthPortal,
	AuthStoreProvider,
	AuthReduxFormProvider,
	ReviewsStoreProvider,
	ReviewsReduxFormProvider,
	ModalReviewPortal,
} from "../../../../containers";
import "./MainWrapper.css";

export const MainWrapper = memo(props => {
	const { router, loginState, modalAuthIsOpen, modalReviewIsOpen, ...restProps } = props;
	// console.log(props);
	//console.log(router);
	return (
		<div className="main-wrapper">
			<AuthStoreProvider>
				<Header route={router} loginState={loginState} />
			</AuthStoreProvider>
			<MainLayout {...restProps} />
			<Footer />

			{modalAuthIsOpen && (
				<ModalAuthPortal>
					<AuthStoreProvider>
						<AuthReduxFormProvider>
							<ModalAuthForm loginState={loginState} />
						</AuthReduxFormProvider>
					</AuthStoreProvider>
				</ModalAuthPortal>
			)}

			{modalReviewIsOpen && (
				<ModalReviewPortal>
					<ReviewsStoreProvider>
						<ReviewsReduxFormProvider>
							<ModalReviewForm />
						</ReviewsReduxFormProvider>
					</ReviewsStoreProvider>
				</ModalReviewPortal>
			)}
		</div>
	);
});
