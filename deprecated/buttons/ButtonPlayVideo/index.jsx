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

import {IconButton} from '../../buttons'

type ButtonPlayVideoType = {
	handleClick: () => void,
};

export const ButtonPlayVideo = ({ handleClick }: ButtonPlayVideoType) => {
	return (
		<>
			<IconButton classname='button-play-video' icon='video' noOpacityChange handleClick={handleClick} />
		</>
	);
};

ButtonPlayVideo.defaultProps = {
	handleClick: () => console.log("click on ButtonPlayVideo"),
};
