import React from "react";
import MediaQuery from "react-responsive";
import { BigHeader, MidHeader, SmallHeader } from "../";
import "./Header.css";

export const Header = () => {
	return (
		<div className="header-wrapper">
			<MediaQuery minWidth={1201}>
				<BigHeader />
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<MidHeader />
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				<SmallHeader />
			</MediaQuery>
		</div>
	);
};
