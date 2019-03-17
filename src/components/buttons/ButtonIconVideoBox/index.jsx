// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ButtonWithIcon } from "../../../components";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";

type ButtonIconVideoBoxType = {
	callback: () => void,
};

export const ButtonIconVideoBox = ({ callback }: ButtonIconVideoBoxType) => {
	return (
		<>
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<ButtonWithIcon icon="video" width="110px" height="82px" />
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<ButtonWithIcon icon="video" width="102px" height="77px" />
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<ButtonWithIcon icon="video" width="102px" height="77px" />
			</MediaQuery>
		</>
	);
};

ButtonIconVideoBox.defaultProps = {
	callback: () => console.log("click on ButtonIconVideoBox"),
};
