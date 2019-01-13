// @flow
import React from "react";
import "./ImageForCatalog.css";
import MediaQuery from "react-responsive";
import { ImageComponent } from "..";
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
	const smallImage = getBigImage(`${image}-big`);
	const middleImage = getMiddleImage(`${image}-middle`);
	const bigImage = getSmallImage(`${image}-small`);
	return (
		<>
			<MediaQuery minWidth={1280}>
				<ImageComponent
					image={bigImage}
					alt={image}
					widthOfImage={configForImage.widthBig}
					heigthOfImage={configForImage.heightBig}
				/>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1279}>
				<ImageComponent
					image={middleImage}
					alt={image}
					widthOfImage={configForImage.widthMiddle}
					heigthOfImage={configForImage.heightMiddle}
				/>
			</MediaQuery>
			<MediaQuery minWidth={240} maxWidth={767}>
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
