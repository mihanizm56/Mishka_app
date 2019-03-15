// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ImageComponent } from "../";
import { getSmallImage, getMiddleImage, getBigImage } from "../../helpers";

type ImageForPageProps = {
	image: string,
	configForImage: any, //////////////////////////////////////////////////////!!!!!!!!!!!!!!!!
};

export const ImageForPage = ({ image, configForImage }: ImageForPageProps) => {
	const bigImage = getBigImage(`${image}-big`);
	const middleImage = getMiddleImage(`${image}-middle`);
	const smallImage = getSmallImage(`${image}-small`);

	return (
		<>
			<MediaQuery minWidth={1201}>
				<ImageComponent
					image={bigImage}
					alt={image}
					widthOfImage={configForImage.widthBig}
					heigthOfImage={configForImage.heightBig}
				/>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<ImageComponent
					image={middleImage}
					alt={image}
					widthOfImage={configForImage.widthMiddle}
					heigthOfImage={configForImage.heightMiddle}
				/>
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
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
