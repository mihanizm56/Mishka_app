// @flow
import React from "react";
import MediaQuery from "react-responsive";
import {
	ImageForPage,
	FooterTextLogo as DescriptionVideoBoxTitle,
	TextForVideo,
	SVGForPage,
} from "../../../../components";
import { ButtonForOffer, ButtonIconVideoBox } from "../../Buttons";
import "./VideoBox.css";

const configForVideoImage = {
	widthMin: "260px",
	heightMin: "150px",
	widthMiddle: "687px",
	heightMiddle: "455px",
	widthBig: "758px",
	heightBig: "455px",
};

export const VideoBox = props => {
	return (
		<div className="video-wrapper">
			<MediaQuery minWidth={1201}>
				<div className="video__inside-box">
					<div className="video__photo-container">
						<ImageForPage image="video-back" configForImage={configForVideoImage} />
						<div className="video__icon-play video__icon-play-big">
							<ButtonIconVideoBox />
						</div>
					</div>
					<div className="video__description-wrapper">
						<div className="description-wrapper__video-container">
							<div className="video-container__icon">
								<SVGForPage icon="camera" configForImage={configForVideoImage} />
							</div>
							<div className="video-container__title">
								<DescriptionVideoBoxTitle text="Процесс производства" />
							</div>
							<div className="video-container__description">
								<TextForVideo text="По просьбам наших любимых фолловеров мы сняли для вас подробное видео о том, как появляются наши товары." />
							</div>
							<div className="video-container__button">
								<ButtonForOffer />
							</div>
						</div>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<div className="video__inside-box">
					<div className="video__photo-container">
						<ImageForPage image="video-back" configForImage={configForVideoImage} />
						<div className="video__icon-play video__icon-play-mid">
							<ButtonIconVideoBox />
						</div>
					</div>
					<div className="video__description-wrapper">
						<div className="description-wrapper__video-container">
							<div className="video-container__icon-and-title">
								<SVGForPage icon="camera" configForImage={configForVideoImage} />
								<DescriptionVideoBoxTitle text="Процесс производства" />
							</div>
							<div className="video-container__description">
								<TextForVideo text="По просьбам наших любимых фолловеров мы сняли для вас подробное видео о том, как появляются наши товары." />
							</div>
							<div className="video-container__button">
								<ButtonForOffer />
							</div>
						</div>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				<div className="video__inside-box">
					<div className="video__photo-container">
						<div className="photo-container__icon-and-title-wrapper">
							<div className="icon-and-title-wrapper__icon">
								<SVGForPage icon="camera" configForImage={configForVideoImage} />
							</div>
							<div className="icon-and-title-wrapper__title">
								<DescriptionVideoBoxTitle text="Процесс производства" />
							</div>
						</div>
						<ImageForPage image="video-back" configForImage={configForVideoImage} />
						<div className="video__icon-play video__icon-play-small">
							<ButtonIconVideoBox />
						</div>
					</div>
					<div className="video__description-wrapper">
						<div className="video-container__description">
							<TextForVideo text="По просьбам наших любимых фолловеров мы сняли для вас подробное видео о том, как появляются наши товары." />
						</div>
						<div className="video-container__button">
							<ButtonForOffer />
						</div>
					</div>
				</div>
			</MediaQuery>
		</div>
	);
};
