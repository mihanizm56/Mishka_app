// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { BigHeader, MidHeader, SmallHeader } from "../";

type HeaderPropType = {
	pageName: string,
};

export const Header = ({ pageName }: HeaderPropType) => {
	return (
		<div className="header-wrapper">
			<MediaQuery minWidth={1201}>
				<BigHeader pageName={pageName} />
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<MidHeader pageName={pageName} />
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				<SmallHeader pageName={pageName} />
			</MediaQuery>
		</div>
	);
};

Header.defaultProps = {
	pageName: "catalog-page",
};
