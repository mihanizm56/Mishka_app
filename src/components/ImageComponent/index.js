// @flow
import React from "react";
import "./ImageComponent.css";

type imageProps = {
	image: string,
	widthOfImage: string,
	heigthOfImage: string,
	alt: string,
};

export const ImageComponent = (props: imageProps) => {
	const { image, widthOfImage, heigthOfImage, alt } = props;
	console.log("/////////////////////");
	console.log(`test render ImageComponent image = ${image}`);
	return <img src={image} style={{ width: widthOfImage, heigth: heigthOfImage }} alt={alt} />;
};
