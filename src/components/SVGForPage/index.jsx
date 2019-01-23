// @flow
import React from "react";
import "./SVGForPage.css";
import MediaQuery from "react-responsive";
import { SVGComponent } from "../";
import { getSmallImage, getMiddleImage, getBigImage } from "../../helpers";

type SVGForPageProps = {
	icon: string,
};

export const SVGForPage = ({ icon }: SVGForPageProps) => {
	const smallIcon = getBigImage(`icon-${icon}-big`);
	const middleIcon = getMiddleImage(`icon-${icon}-middle`);
	const bigIcon = getSmallImage(`icon-${icon}-small`);
	return (
		<>
			<MediaQuery minWidth={1280}>
				<SVGComponent path={smallIcon} />
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1279}>
				<SVGComponent path={middleIcon} />
			</MediaQuery>
			<MediaQuery minWidth={240} maxWidth={767}>
				<SVGComponent path={bigIcon} />
			</MediaQuery>
		</>
	);
};
