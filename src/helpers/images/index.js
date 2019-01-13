// @flow

import { hareSmallImage } from "../../images/pictures";
import { hareMiddleImage } from "../../images/pictures";
import { hareBigImage } from "../../images/pictures";

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
