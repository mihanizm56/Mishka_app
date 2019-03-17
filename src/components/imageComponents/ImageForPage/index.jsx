// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ImageComponent } from "../";
import { getSmallImage, getMiddleImage, getBigImage } from "../../../helpers";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";

type ImageForPageProps = {
	image: string,
};

export const ImageForPage = ({ image, configForImage }: ImageForPageProps) => {
	const bigImage = getBigImage(`${image}-big`);
	const middleImage = getMiddleImage(`${image}-middle`);
	const smallImage = getSmallImage(`${image}-small`);

	return (
		<>
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<ImageComponent
					image={bigImage}
					alt={image}
					widthOfImage={configForImage.widthBig}
					heigthOfImage={configForImage.heightBig}
				/>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<ImageComponent
					image={middleImage}
					alt={image}
					widthOfImage={configForImage.widthMiddle}
					heigthOfImage={configForImage.heightMiddle}
				/>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<ImageComponent
					image={smallImage}
					alt={image}
					widthOfImage={configForImage.widthMin}
					heigthOfImage={configForImage.heightMin}
				/>
			</MediaQuery>
		</>
	);
};
