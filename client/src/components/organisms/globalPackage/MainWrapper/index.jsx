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
	const { router, loginState, modalAuthIsOpen, modalReviewIsOpen, searchState, ...restProps } = props;
	const {
		location: { pathname },
	} = router;
	const closeSmallMenu = modalAuthIsOpen || modalReviewIsOpen;
	// console.log("MainWrapper props", props);
	return (
		<div className="main-wrapper">
			<FilterItemsProvider pagePathName={pathname}>
				<AuthStoreProvider>
					<ShopItemsProvider loginState={loginState}>
						<Header route={router} searchState={searchState} loginState={loginState} closeSmallMenu={closeSmallMenu} />
					</ShopItemsProvider>
				</AuthStoreProvider>
			</FilterItemsProvider>
			<MainLayout {...restProps} loginState={loginState} />
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
