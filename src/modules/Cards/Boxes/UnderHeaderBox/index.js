import React from "react";
import MediaQuery from "react-responsive";
import { MainTitle } from "../../../../components";
import zigzagPhotoBig from "../../../../images/pictures/zigZag/img/zigzag-big.png";
import zigzagPhotoMiddle from "../../../../images/pictures/zigZag/img/zigzag-mid.png";
import "./UnderHeaderBox.css";

export const UnderHeaderBox = ({ text }) => {
	return (
		<div className="under-header-box">
			<div className="under-header-box__back-box" />
			<div className="under-header-box__text">
				<MainTitle text={text} />
			</div>
			<MediaQuery minWidth={1201}>
				<div style={{ backgroundImage: `url(${zigzagPhotoBig})` }} className="under-header-box__zigzag-box" />
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<div style={{ backgroundImage: `url(${zigzagPhotoMiddle})` }} className="under-header-box__zigzag-box" />
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				<div className="under-header-box__zigzag-box" />
			</MediaQuery>
		</div>
	);
};
