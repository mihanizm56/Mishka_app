import React from "react";
import MediaQuery from "react-responsive";
import { VerdanaText } from "../../../components";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";
import "./UnderHeaderBox.css";
import zigzagPhotoBig from "../../../images/pictures/zigZag/img/zigzag-big.png";
import zigzagPhotoMiddle from "../../../images/pictures/zigZag/img/zigzag-mid.png";

export const UnderHeaderBox = ({ text }) => {
	return (
		<div className="under-header-box">
			<div className="under-header-box__back-box" />
			<div className="under-header-box__text">
				<VerdanaText text={text} classname='main-title' bold/>
			</div>
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<div style={{ backgroundImage: `url(${zigzagPhotoBig})` }} className="under-header-box__zigzag-box" />
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<div style={{ backgroundImage: `url(${zigzagPhotoMiddle})` }} className="under-header-box__zigzag-box" />
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<div className="under-header-box__zigzag-box" />
			</MediaQuery>
		</div>
	);
};
