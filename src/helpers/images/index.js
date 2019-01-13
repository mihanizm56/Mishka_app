// @flow

import { hareSmallImage } from "../../images";
import { hareMiddleImage } from "../../images";
import { hareBigImage } from "../../images";

export const getSmallImage = (name: string) => {
	console.log(`test getSmallImage, image-name=${name}`);
	switch (name) {
		case "hare-small":
			return hareSmallImage;

		default:
			return null;
	}
};

export const getMiddleImage = (name: string) => {
	console.log(`test getMiddleImage, image-name=${name}`);
	switch (name) {
		case "hare-middle":
			return hareMiddleImage;

		default:
			return null;
	}
};

export const getBigImage = (name: string) => {
	console.log(`test getBigImage, image-name=${name}`);
	switch (name) {
		case "hare-big":
			return hareBigImage;

		default:
			return null;
	}
};
