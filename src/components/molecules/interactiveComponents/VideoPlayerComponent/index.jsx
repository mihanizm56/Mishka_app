// @flow
import React, { Component } from "react";
import ReactPlayer from "react-player";
import { ImageForPage } from "../../../../components";
import "./VideoPlayerComponent.css";
import { getClass } from "../../../../utils";

import { IconButton } from "../../../atoms/buttons";

const configForPhotoImage = {
	widthMin: "100%",
	heightMin: "100%",
	widthMiddle: "687px",
	heightMiddle: "390px",
	widthBig: "758px",
	heightBig: "505px",
};

const configForVideoImage = {
	widthMin: "100%",
	heightMin: "300px",
	widthMiddle: "687px",
	heightMiddle: "390px",
	widthBig: "758px",
	heightBig: "505px",
};

const SIZES = {
	BIG: "big",
	MIDDLE: "middle",
	SMALL: "small",
};

export class VideoPlayerComponent extends Component {
	state = {
		isPlaying: false,
	};

	handleClick = () => {
		console.log("check handleClick");
		this.setState(prevState => ({ isPlaying: !prevState.isPlaying }), console.log("STATE CHANGED"));
	};

	getWidth = size => {
		switch (size) {
			case SIZES.BIG:
				return configForVideoImage.widthBig;

			case SIZES.MIDDLE:
				return configForVideoImage.widthMiddle;

			case SIZES.SMALL:
				return configForVideoImage.widthMin;

			default:
				return null;
		}
	};

	getHeight = size => {
		switch (size) {
			case SIZES.BIG:
				return configForVideoImage.heightBig;

			case SIZES.MIDDLE:
				return configForVideoImage.heightMiddle;

			case SIZES.SMALL:
				return configForVideoImage.heightMin;

			default:
				return null;
		}
	};

	renderView = (isPlaying, link, size) => {
		return isPlaying ? (
			<ReactPlayer url={link} playing={isPlaying} controls width={this.getWidth(size)} height={this.getHeight(size)} />
		) : (
			<>
				<ImageForPage image="video-back" configForImage={configForPhotoImage} />
				<div
					className={getClass({
						initialClass: "video__icon-play",
						big: size === "big",
						middle: size === "middle",
						small: size === "small",
					})}
				>
					<IconButton classname="button-play-video" icon="video" noOpacityChange handleClick={this.handleClick} />
				</div>
			</>
		);
	};

	render() {
		const { isPlaying } = this.state;
		const { link, size } = this.props;

		return <div className="video-player-wrapper">{this.renderView(isPlaying, link, size)}</div>;
	}
}
