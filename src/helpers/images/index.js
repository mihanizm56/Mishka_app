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

//иконки вставляем через export default

import mainLogoSmallIcon from "../../images/icons/main-logo/img/main-logo-small.svg";
import mainLogoMiddleIcon from "../../images/icons/main-logo/img/main-logo-mid.svg";
import mainLogoBigIcon from "../../images/icons/main-logo/img/main-logo-big.svg";

import iconVideoSmall from "../../images/icons/icon-video-small.svg";
import iconVideoMiddle from "../../images/icons/icon-video-mid.svg";
import iconVideoBig from "../../images/icons/icon-video-big.svg";

import iconBasket from "../../images/icons/icon-basket.svg";
import iconAcademy from "../../images/icons/icon-acagemy.svg";
import iconFacebook from "../../images/icons/icon-fb.svg";
import iconInstagram from "../../images/icons/icon-insta.svg";
import iconTwitter from "../../images/icons/icon-twitter.svg";
import iconLogoFooter from "../../images/icons/icon-logo-footer.svg";
import iconSearch from "../../images/icons/icon-search.svg";
import iconCamera from "../../images/icons/icon-camera.svg";

export const getSmallImage = (name: string) => {
	// console.log(`test getSmallImage, image-name=${name}`);
	switch (name) {
		case "hare-small":
			return hareSmallImage;
		case "basket-small":
			return basketSmallImage;
		case "big-basket-small":
			return bigBasketSmallImage;
		case "video-back-small":
			return videoBackSmallImage;
		case "icon-main-logo-small":
			return mainLogoSmallIcon;
		case "icon-basket-small":
			return iconBasket;
		case "icon-academy-small":
			return iconAcademy;
		case "icon-facebook-small":
			return iconFacebook;
		case "icon-instagram-small":
			return iconInstagram;
		case "icon-twitter-small":
			return iconTwitter;
		case "icon-video-small":
			return iconVideoSmall;
		case "icon-logo-footer-small":
			return iconLogoFooter;
		case "icon-search-small":
			return iconSearch;
		case "icon-camera-small":
			return iconCamera;

		default:
			return null;
	}
};

export const getMiddleImage = (name: string) => {
	// console.log(`test getMiddleImage, image-name=${name}`);
	switch (name) {
		case "hare-middle":
			return hareMiddleImage;
		case "basket-middle":
			return basketMiddleImage;
		case "big-basket-middle":
			return bigBasketMiddleImage;
		case "video-back-middle":
			return videoBackMiddleImage;
		case "icon-main-logo-middle":
			return mainLogoMiddleIcon;
		case "icon-basket-middle":
			return iconBasket;
		case "icon-academy-middle":
			return iconAcademy;
		case "icon-facebook-middle":
			return iconFacebook;
		case "icon-instagram-middle":
			return iconInstagram;
		case "icon-twitter-middle":
			return iconTwitter;
		case "icon-video-middle":
			return iconVideoMiddle;
		case "icon-logo-footer-middle":
			return iconLogoFooter;
		case "icon-search-middle":
			return iconSearch;
		case "icon-camera-middle":
			return iconCamera;

		default:
			return null;
	}
};

export const getBigImage = (name: string) => {
	// console.log(`test getBigImage, image-name=${name}`);
	switch (name) {
		case "hare-big":
			return hareBigImage;
		case "basket-big":
			return basketBigImage;
		case "big-basket-big":
			return bigBasketBigImage;
		case "video-back-big":
			return videoBackBigImage;
		case "icon-main-logo-big":
			return mainLogoBigIcon;
		case "icon-basket-big":
			return iconBasket;
		case "icon-academy-big":
			return iconAcademy;
		case "icon-facebook-big":
			return iconFacebook;
		case "icon-instagram-big":
			return iconInstagram;
		case "icon-twitter-big":
			return iconTwitter;
		case "icon-video-big":
			return iconVideoBig;
		case "icon-logo-footer-big":
			return iconLogoFooter;
		case "icon-search-big":
			return iconSearch;
		case "icon-camera-big":
			return iconCamera;

		default:
			return null;
	}
};
