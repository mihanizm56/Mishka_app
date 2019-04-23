//
import React from "react";
import "./SVGIcon.css";
import MediaQuery from "react-responsive";
import { SVGComponent } from "..";
import { getSmallImage, getMiddleImage, getBigImage } from "../../../../utils";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";

type SVGIconProps = {
	icon: string,
};

export const SVGIcon = ({ icon }: SVGIconProps) => {
	const smallIcon = getBigImage(`icon-${icon}-big`);
	const middleIcon = getMiddleImage(`icon-${icon}-middle`);
	const bigIcon = getSmallImage(`icon-${icon}-small`);
	return (
		<>
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<SVGComponent path={smallIcon} />
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<SVGComponent path={middleIcon} />
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<SVGComponent path={bigIcon} />
			</MediaQuery>
		</>
	);
};
