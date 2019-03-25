// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ButtonWrappedIcon } from "../../../components";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";

type ButtonPlayVideoType = {
	handleClick: () => void,
};

export const ButtonPlayVideo = ({ handleClick }: ButtonPlayVideoType) => {
	return (
		<>
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<ButtonWrappedIcon icon="video" width="110px" height="82px" noOpacityChange handleClick={handleClick}/>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<ButtonWrappedIcon icon="video" width="102px" height="77px" noOpacityChange handleClick={handleClick}/>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<ButtonWrappedIcon icon="video" width="102px" height="77px" noOpacityChange handleClick={handleClick}/>
			</MediaQuery>
		</>
	);
};

ButtonPlayVideo.defaultProps = {
	handleClick: () => console.log("click on ButtonPlayVideo"),
};
