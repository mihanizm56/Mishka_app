//

// картиинки

import { hareSmallImage } from "../../assets/images/pictures";
import { hareMiddleImage } from "../../assets/images/pictures";
import { hareBigImage } from "../../assets/images/pictures";

import { basketSmallImage } from "../../assets/images/pictures";
import { basketMiddleImage } from "../../assets/images/pictures";
import { basketBigImage } from "../../assets/images/pictures";

import { bigBasketSmallImage } from "../../assets/images/pictures";
import { bigBasketMiddleImage } from "../../assets/images/pictures";
import { bigBasketBigImage } from "../../assets/images/pictures";

import { videoBackSmallImage } from "../../assets/images/pictures";
import { videoBackMiddleImage } from "../../assets/images/pictures";
import { videoBackBigImage } from "../../assets/images/pictures";

import { BackgroundImageForReview } from "../../assets/images/pictures";

import { basketIndexSmallImage } from "../../assets/images/pictures";
import { basketIndexMiddleImage } from "../../assets/images/pictures";
import { basketIndexBigImage } from "../../assets/images/pictures";

import { mapBackSmallImage } from "../../assets/images/pictures";
import { mapBackMiddleImage } from "../../assets/images/pictures";
import { mapBackBigImage } from "../../assets/images/pictures";

import { houseIndexSmallImage } from "../../assets/images/pictures";
import { houseIndexMiddleImage } from "../../assets/images/pictures";
import { houseIndexBigImage } from "../../assets/images/pictures";

import { zigzagIndexImageBig } from "../../assets/images/pictures";
import { zigzagIndexImageMiddle } from "../../assets/images/pictures";
import { zigzagIndexImageSmall } from "../../assets/images/pictures";

//иконки вставляем через export default

import mainLogoSmallIcon from "../../assets/images/icons/main-logo/img/main-logo-small.svg";
import mainLogoMiddleIcon from "../../assets/images/icons/main-logo/img/main-logo-mid.svg";
import mainLogoBigIcon from "../../assets/images/icons/main-logo/img/main-logo-big.svg";

import iconVideoSmall from "../../assets/images/icons/icon-video-small.svg";
import iconVideoMiddle from "../../assets/images/icons/icon-video-mid.svg";
import iconVideoBig from "../../assets/images/icons/icon-video-big.svg";

import iconBasket from "../../assets/images/icons/icon-basket.svg";
import iconAcademy from "../../assets/images/icons/icon-acagemy.svg";
import iconFacebook from "../../assets/images/icons/icon-fb.svg";
import iconInstagram from "../../assets/images/icons/icon-insta.svg";
import iconTwitter from "../../assets/images/icons/icon-twitter.svg";
import iconLogoFooter from "../../assets/images/icons/icon-logo-footer.svg";
import iconSearch from "../../assets/images/icons/icon-search.svg";
import iconCamera from "../../assets/images/icons/icon-camera.svg";
import iconZoom from "../../assets/images/icons/icon-zoom.svg";

/// Icons Special For Interactive Actions
import iconCross from "../../assets/images/pictures/forSpecialIcons/menu-icon-close.png";
import iconMenu from "../../assets/images/pictures/forSpecialIcons/menu-icon.png";

/// Icons Index Page
import iconFlower from "../../assets/images/icons/icon-flower.svg";
import iconBall from "../../assets/images/icons/icon-ball.svg";
import iconGift from "../../assets/images/icons/icon-gift.svg";
import iconHeart from "../../assets/images/icons/icon-heart.svg";
import iconRocket from "../../assets/images/icons/icon-rocket.svg";
import iconStyle from "../../assets/images/icons/icon-style.svg";
import iconArrow from "../../assets/images/icons/icon-arrow.svg";
import iconFlag from "../../assets/images/icons/icon-flag.svg";
import iconHitTitle from "../../assets/images/icons/icon-week-hit.svg";
import iconVase from "../../assets/images/icons/icon-vase.svg";
import iconToy from "../../assets/images/icons/icon-toy.svg";

///// Icons form page
import iconCheck from "../../assets/images/icons/icon-check.svg";
import iconRadio from "../../assets/images/icons/icon-radio.svg";
import iconPhone from "../../assets/images/icons/icon-phone.svg";
import iconMail from "../../assets/images/icons/icon-mail.svg";

////// Loader icons
import LoaderIcon from "../../assets/images/icons/bounce.svg";
import LoaderSuccessIcon from "../../assets/images/icons/success.svg";

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
		case "index-basket-small":
			return basketIndexSmallImage;
		case "map-back-small":
			return mapBackSmallImage;
		case "house-index-small":
			return houseIndexSmallImage;
		case "zigzag-index-small":
			return zigzagIndexImageSmall;
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
		case "icon-zoom-small":
			return iconZoom;
		case "icon-cross-small":
			return iconCross;
		case "icon-menu-small":
			return iconMenu;
		case "icon-flower-small":
			return iconFlower;
		case "icon-ball-small":
			return iconBall;
		case "icon-gift-small":
			return iconGift;
		case "icon-heart-small":
			return iconHeart;
		case "icon-rocket-small":
			return iconRocket;
		case "icon-style-small":
			return iconStyle;
		case "icon-arrow-small":
			return iconArrow;
		case "icon-hit-small":
			return iconHitTitle;
		case "icon-vase-small":
			return iconVase;
		case "icon-toy-small":
			return iconToy;
		case "icon-check-small":
			return iconCheck;
		case "icon-radio-small":
			return iconRadio;
		case "icon-phone-small":
			return iconPhone;
		case "icon-mail-small":
			return iconMail;
		case "icon-loading-small":
			return LoaderIcon;
		case "icon-success-small":
			return LoaderSuccessIcon;

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
		case "review-back-middle":
			return BackgroundImageForReview;
		case "index-basket-middle":
			return basketIndexMiddleImage;
		case "map-back-middle":
			return mapBackMiddleImage;
		case "house-index-middle":
			return houseIndexMiddleImage;
		case "zigzag-index-middle":
			return zigzagIndexImageMiddle;
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
		case "icon-zoom-middle":
			return iconZoom;
		case "icon-cross-middle":
			return iconCross;
		case "icon-menu-middle":
			return iconMenu;
		case "icon-flower-middle":
			return iconFlower;
		case "icon-ball-middle":
			return iconBall;
		case "icon-gift-middle":
			return iconGift;
		case "icon-heart-middle":
			return iconHeart;
		case "icon-rocket-middle":
			return iconRocket;
		case "icon-style-middle":
			return iconStyle;
		case "icon-arrow-middle":
			return iconArrow;
		case "icon-flag-middle":
			return iconFlag;
		case "icon-hit-middle":
			return iconHitTitle;
		case "icon-vase-middle":
			return iconVase;
		case "icon-toy-middle":
			return iconToy;
		case "icon-check-middle":
			return iconCheck;
		case "icon-radio-middle":
			return iconRadio;
		case "icon-phone-middle":
			return iconPhone;
		case "icon-mail-middle":
			return iconMail;
		case "icon-loading-middle":
			return LoaderIcon;
		case "icon-success-middle":
			return LoaderSuccessIcon;

		default:
			return null;
	}
};

export const getBigImage = (name: string) => {
	//console.log(`test getBigImage, image-name=${name}`);
	switch (name) {
		case "hare-big":
			return hareBigImage;
		case "basket-big":
			return basketBigImage;
		case "big-basket-big":
			return bigBasketBigImage;
		case "video-back-big":
			return videoBackBigImage;
		case "review-back-big":
			return BackgroundImageForReview;
		case "index-basket-big":
			return basketIndexBigImage;
		case "map-back-big":
			return mapBackBigImage;
		case "house-index-big":
			return houseIndexBigImage;
		case "zigzag-index-big":
			return zigzagIndexImageBig;
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
		case "icon-zoom-big":
			return iconZoom;
		case "icon-cross-big":
			return iconCross;
		case "icon-menu-big":
			return iconMenu;
		case "icon-flower-big":
			return iconFlower;
		case "icon-ball-big":
			return iconBall;
		case "icon-gift-big":
			return iconGift;
		case "icon-heart-big":
			return iconHeart;
		case "icon-rocket-big":
			return iconRocket;
		case "icon-style-big":
			return iconStyle;
		case "icon-arrow-big":
			return iconArrow;
		case "icon-flag-big":
			return iconFlag;
		case "icon-hit-big":
			return iconHitTitle;
		case "icon-vase-big":
			return iconVase;
		case "icon-toy-big":
			return iconToy;
		case "icon-check-big":
			return iconCheck;
		case "icon-radio-big":
			return iconRadio;
		case "icon-phone-big":
			return iconPhone;
		case "icon-mail-big":
			return iconMail;
		case "icon-loading-big":
			return LoaderIcon;
		case "icon-success-big":
			return LoaderSuccessIcon;

		default:
			return null;
	}
};
