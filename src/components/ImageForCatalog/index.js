// @flow
import React from "react";
import "./ImageForCatalog.css";
import MediaQuery from "react-responsive";
import { ImageComponent } from "../";
import { getSmallImage, getMiddleImage, getBigImage } from "../../helpers";

type ImageForCatalogProps = {
	image: string,
};

const configForImage = {
	widthMin: "260px",
	heightMin: "195px",
	widthMiddle: "334px",
	heightMiddle: "334px-",
	widthBig: "317px",
	heightBig: "464px",
};

export const ImageForCatalog = (props: ImageForCatalogProps) => {
	const { image } = props;
	const alt = "this image is for catalog";
	console.log(`test ImageForCatalog, image-name=${image}`);

	const smallImage = getBigImage(`${image}-big`);
	const middleImage = getMiddleImage(`${image}-middle`);
	const bigImage = getSmallImage(`${image}-small`);

	return (
		<>
			<MediaQuery minWidth={1280} maxWidth={1600}>
				<ImageComponent
					image={bigImage}
					alt={alt}
					widthOfImage={configForImage.widthBig}
					heigthOfImage={configForImage.heightBig}
				/>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1279}>
				<ImageComponent
					image={middleImage}
					alt={alt}
					widthOfImage={configForImage.widthMiddle}
					heigthOfImage={configForImage.heightMiddle}
				/>
			</MediaQuery>
			<MediaQuery minWidth={240} maxWidth={767}>
				<ImageComponent
					image={smallImage}
					alt={alt}
					widthOfImage={configForImage.widthMin}
					heigthOfImage={configForImage.heightMin}
				/>
			</MediaQuery>
		</>
	);
};
