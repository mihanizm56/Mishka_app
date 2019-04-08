//
import React, { memo } from "react";
import MediaQuery from "react-responsive";
import { OpenSansText, SVGIcon, VerdanaText } from "../../../../components";
import { VideoPlayerComponent } from "../../../../components";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";
import "./VideoBox.css";

import { Button } from "../../../atoms/buttons";

export const VideoBox = memo(props => {
	return (
		<div className="video-wrapper">
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<div className="video__inside-box">
					<div className="video__photo-container">
						<VideoPlayerComponent link="https://www.youtube.com/watch?v=ysz5S6PUM-U" size="big" />
					</div>
					<div className="video__description-wrapper">
						<div className="description-wrapper__video-container">
							<div className="video-container__icon">
								<SVGIcon icon="camera" />
							</div>
							<div className="video-container__title">
								<VerdanaText text="Процесс производства" classname="footer__text-logo" bold />
							</div>
							<div className="video-container__description">
								<OpenSansText
									classname="text-video"
									text="По просьбам наших любимых фолловеров мы сняли для вас подробное видео о том, как появляются наши товары."
								/>
							</div>
							<div className="video-container__button">
								<Button classname="button-offer-wrapper" text="сделать заказ" />
							</div>
						</div>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<div className="video__inside-box">
					<div className="video__photo-container">
						<VideoPlayerComponent link="https://www.youtube.com/watch?v=ysz5S6PUM-U" size="middle" />
					</div>
					<div className="video__description-wrapper">
						<div className="description-wrapper__video-container">
							<div className="video-container__icon-and-title">
								<SVGIcon icon="camera" />
								<VerdanaText text="Процесс производства" classname="footer__text-logo" bold />
							</div>
							<div className="video-container__description">
								<OpenSansText
									classname="text-video"
									text="По просьбам наших любимых фолловеров мы сняли для вас подробное видео о том, как появляются наши товары."
								/>
							</div>
							<div className="video-container__button">
								<Button classname="button-offer-wrapper" text="сделать заказ" />
							</div>
						</div>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<div className="video__inside-box">
					<div className="video__photo-container">
						<div className="photo-container__icon-and-title-wrapper">
							<div className="icon-and-title-wrapper__icon">
								<SVGIcon icon="camera" />
							</div>
							<div className="icon-and-title-wrapper__title">
								<VerdanaText text="Процесс производства" classname="footer__text-logo" bold />
							</div>
						</div>
						<div className="video__photo-container">
							<VideoPlayerComponent link="https://www.youtube.com/watch?v=ysz5S6PUM-U" size="small" />
						</div>
					</div>
					<div className="video__description-wrapper">
						<div className="video-container__description">
							<OpenSansText
								classname="text-video"
								text="По просьбам наших любимых фолловеров мы сняли для вас подробное видео о том, как появляются наши товары."
							/>
						</div>
						<div className="video-container__button">
							<Button classname="button-offer-wrapper" text="сделать заказ" />
						</div>
					</div>
				</div>
			</MediaQuery>
		</div>
	);
});
