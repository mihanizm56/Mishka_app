// @flow
import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { BigHeader, MidHeader, SmallHeader } from "./headers";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";
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

	shouldComponentUpdate(prevProps) {
		if (prevProps.route.location.pathname === this.props.route.location.pathname) {
			return false;
		}

		return true;
	}

	componentDidUpdate(prevProps) {
		console.log("PREV ROUTE");
		console.log(prevProps.route.location.pathname);
		console.log("NEXT ROUTE");
		console.log(this.props.route.location.pathname);
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
		} = this.props;
		//const pageHash = "catalog-page";
		//console.log("pageHash = ", pageHash);
		//console.log("pageName = ", this.getPageName(pageHash));
		return (
			<div className="header-wrapper">
				<MediaQuery minWidth={BIG_MEDIA_SIZE}>
					<BigHeader page={this.getPageName(pathname)} />
				</MediaQuery>
				<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
					<MidHeader page={this.getPageName(pathname)} />
				</MediaQuery>
				<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
					<SmallHeader page={this.getPageName(pathname)} />
				</MediaQuery>
			</div>
		);
	}
}
