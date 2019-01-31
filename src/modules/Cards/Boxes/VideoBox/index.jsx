// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ImageForPage, ParagraphForCards, ButtonWithIcon } from "../../../../components";
import "./VideoBox.css";

const configForVideoImage = {
	widthMin: "260px",
	heightMin: "150px",
	widthMiddle: "668px",
	heightMiddle: "455px",
	widthBig: "682px",
	heightBig: "455px",
};

export const VideoBox = props => {
	return (
		<div className="video-wrapper">
			<div className="video__photo-container">
				<ImageForPage image="video-back" configForImage={configForVideoImage} />
				<div className="video__icon-play video__icon-play-big">
					<MediaQuery minWidth={1201}>
						<ButtonWithIcon icon="video" width="110px" height="82px" />
					</MediaQuery>
				</div>
				<div className="video__icon-play video__icon-play-mid">
					<MediaQuery minWidth={768} maxWidth={1200}>
						<ButtonWithIcon icon="video" width="102px" height="77px" />
					</MediaQuery>
				</div>
				<div className="video__icon-play video__icon-play-small">
					<MediaQuery minWidth={320} maxWidth={767}>
						<ButtonWithIcon icon="video" width="102px" height="77px" />
					</MediaQuery>
				</div>
			</div>
		</div>
	);
};
