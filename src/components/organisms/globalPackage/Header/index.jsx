//
import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { BigHeader, MidHeader, SmallHeader } from "./headers";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";
import {
	ERROR_PAGE_NAME,
	EMPTY_PAGE,
	CATALOG_PAGE,
	INDEX_PAGE,
	ORDER_PAGE,
	CATALOG_PAGE_NAME,
	INDEX_PAGE_NAME,
	ORDER_PAGE_NAME,
} from "./constants";

type HeaderPropType = {
	pageName: string,
};

export class Header extends Component<HeaderPropType> {
	static defaultProps = {
		pageName: "catalog-page",
	};

	///////переписать
	shouldComponentUpdate(prevProps) {
		const {
			route: {
				location: { pathname: prevPathName },
			},
			appLoading: appLoadingPrev,
			loginState: loginStatePrev,
			modalAuthIsOpen: modalAuthIsOpenPrev,
			pageName: pageNamePrev,
			userName: userNamePrev,
			closeSmallMenu: closeSmallMenuPrev
		} = prevProps;
		const {
			route: {
				location: { pathname: nextPathName },
			},
			appLoading: appLoadingNext,
			loginState: loginStateNext,
			modalAuthIsOpen: modalAuthIsOpenNext,
			pageName: pageNameNext,
			userName: userNameNext,
			closeSmallMenu: closeSmallMenuNext
		} = this.props;

		if (
			prevPathName === nextPathName &&
			appLoadingPrev === appLoadingNext &&
			loginStatePrev === loginStateNext &&
			modalAuthIsOpenPrev === modalAuthIsOpenNext &&
			pageNamePrev === pageNameNext &&
			userNamePrev === userNameNext &&
			closeSmallMenuPrev === closeSmallMenuNext
		) {
			return false;
		}

		return true;
	}

	componentDidUpdate(prevProps) {
		// console.log("PREV ROUTE");
		// console.log(prevProps.route.location.pathname);
		// console.log("NEXT ROUTE");
		// console.log(this.props.route.location.pathname);
		// console.log("update Header");
		console.count("Header");
	}

	getPageName = (pageHash: string) => {
		console.log("test pageHash in getPageName = ", pageHash);
		if (pageHash === INDEX_PAGE || pageHash === EMPTY_PAGE) {
			return INDEX_PAGE_NAME;
		}
		if (pageHash === CATALOG_PAGE) {
			return CATALOG_PAGE_NAME;
		}
		if (pageHash === ORDER_PAGE) {
			return ORDER_PAGE_NAME;
		}

		return ERROR_PAGE_NAME;
	};

	render() {
		const {
			route: {
				location: { pathname },
			},
			loginState,
			...restProps
		} = this.props;
		//const pageHash = "catalog-page";
		console.log("Header loginState");
		console.log(this.props);
		return (
			<div className="header-wrapper">
				<MediaQuery minWidth={BIG_MEDIA_SIZE}>
					<BigHeader page={this.getPageName(pathname)} {...restProps} loginState={loginState} />
				</MediaQuery>
				<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
					<MidHeader page={this.getPageName(pathname)} {...restProps} loginState={loginState} />
				</MediaQuery>
				<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
					<SmallHeader page={this.getPageName(pathname)} {...restProps} loginState={loginState} />
				</MediaQuery>
			</div>
		);
	}
}
