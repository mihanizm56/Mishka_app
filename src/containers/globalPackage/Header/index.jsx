// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { BigHeader, MidHeader, SmallHeader } from "../";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";

type HeaderPropType = {
	pageName: string,
};

export const Header = (props: HeaderPropType) => {
	console.log(props)
	const {pageName} = props
	return (
		<div className="header-wrapper">
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<BigHeader pageName={pageName} />
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<MidHeader pageName={pageName} />
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<SmallHeader pageName={pageName} />
			</MediaQuery>
		</div>
	);
};

Header.defaultProps = {
	pageName: "catalog-page",
};
