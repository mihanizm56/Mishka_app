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

export const getSmallImage = (name: string) => {
	console.log(`test getSmallImage, image-name=${name}`);
	switch (name) {
		case "hare-small":
			return hareSmallImage;
		case "basket-small":
			return basketSmallImage;
		case "big-basket-small":
			return bigBasketSmallImage;

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

		default:
			return null;
	}
};
