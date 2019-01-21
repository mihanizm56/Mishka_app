// @flow

import { hareSmallImage } from "../../images/pictures";
import { hareMiddleImage } from "../../images/pictures";
import { hareBigImage } from "../../images/pictures";

import { basketSmallImage } from "../../images/pictures";
import { basketMiddleImage } from "../../images/pictures";
import { basketBigImage } from "../../images/pictures";

import { bigBasketSmallImage } from "../../images/pictures";
import { bigBasketMiddleImage } from "../../images/pictures";
import { bigBasketBigImage } from "../../images/pictures";

import { videoBackSmallImage } from "../../images/pictures";
import { videoBackMiddleImage } from "../../images/pictures";
import { videoBackBigImage } from "../../images/pictures";

// import { mainLogoSmallImage } from "../../images/icons";
// import { mainLogoMiddleImage } from "../../images/icons";
// import { mainLogoBigImage } from "../../images/icons";

export const getSmallImage = (name: string) => {
	console.log(`test getSmallImage, image-name=${name}`);
	switch (name) {
		case "hare-small":
			return hareSmallImage;
		case "basket-small":
			return basketSmallImage;
		case "big-basket-small":
			return bigBasketSmallImage;
		case "video-back-small":
			return videoBackSmallImage;
		// case "main-logo-small":
		// 	return mainLogoSmallImage;

		default:
			return null;
	}
};

export const getMiddleImage = (name: string) => {
	console.log(`test getMiddleImage, image-name=${name}`);
	switch (name) {
		case "hare-middle":
			return hareMiddleImage;
		case "basket-middle":
			return basketMiddleImage;
		case "big-basket-middle":
			return bigBasketMiddleImage;
		case "video-back-middle":
			return videoBackMiddleImage;
		// case "main-logo-middle":
		// 	return mainLogoMiddleImage;

		default:
			return null;
	}
};

export const getBigImage = (name: string) => {
	console.log(`test getBigImage, image-name=${name}`);
	switch (name) {
		case "hare-big":
			return hareBigImage;
		case "basket-big":
			return basketBigImage;
		case "big-basket-big":
			return bigBasketBigImage;
		case "video-back-big":
			return videoBackBigImage;
		// case "main-logo-big":
		// 	return mainLogoBigImage;

		default:
			return null;
	}
};
