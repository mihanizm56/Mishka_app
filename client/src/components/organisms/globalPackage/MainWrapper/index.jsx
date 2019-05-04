//
import React, { memo } from "react";
import { MainLayout } from "../../../../routes";
import { Footer, Header } from "..";
import { ModalAuthForm, ModalReviewForm } from "../..";
import {
	AuthStoreProvider,
	AuthReduxFormProvider,
	ReviewsStoreProvider,
	ReviewsReduxFormProvider,
	ModalPortal,
	FilterItemsProvider,
	ShopItemsProvider,
} from "../../../../containers";
import "./MainWrapper.css";

export const MainWrapper = memo(props => {
	const { router, modalAuthIsOpen, modalReviewIsOpen, ...restProps } = props;
	const {
		location: { pathname },
	} = router;
	const smallMenuIsClosed = modalAuthIsOpen || modalReviewIsOpen;
	// console.log("MainWrapper props", props);
	return (
		<div className="main-wrapper">
			<FilterItemsProvider pagePathName={pathname}>
				<AuthStoreProvider>
					<ShopItemsProvider>
						<Header route={router} smallMenuIsClosed={smallMenuIsClosed} />
					</ShopItemsProvider>
				</AuthStoreProvider>
			</FilterItemsProvider>
			<AuthStoreProvider>
				<MainLayout {...restProps} />
			</AuthStoreProvider>
			<Footer />

			{modalAuthIsOpen && (
				<ModalPortal show={modalAuthIsOpen}>
					<AuthStoreProvider>
						<AuthReduxFormProvider>
							<ModalAuthForm />
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
