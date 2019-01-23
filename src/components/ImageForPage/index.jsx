// @flow
import React from "react";
import "./ImageForPage.css";
import MediaQuery from "react-responsive";
import { ImageComponent } from "../";
import { getSmallImage, getMiddleImage, getBigImage } from "../../helpers";

type ImageForPageProps = {
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

export const ImageForPage = (props: ImageForPageProps) => {
	const { image } = props;
	const smallImage = getBigImage(`${image}-big`);
	const middleImage = getMiddleImage(`${image}-middle`);
	const bigImage = getSmallImage(`${image}-small`);
	return (
		<>
			<MediaQuery minWidth={1001}>
				<ImageComponent
					image={bigImage}
					alt={image}
					widthOfImage={configForImage.widthBig}
					heigthOfImage={configForImage.heightBig}
				/>
			</MediaQuery>
			<MediaQuery minWidth={701} maxWidth={1000}>
				<ImageComponent
					image={middleImage}
					alt={image}
					widthOfImage={configForImage.widthMiddle}
					heigthOfImage={configForImage.heightMiddle}
				/>
			</MediaQuery>
			<MediaQuery minWidth={240} maxWidth={700}>
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
