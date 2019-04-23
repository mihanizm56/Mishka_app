//
import React, { memo } from "react";
import "./ImageComponent.css";

type imageProps = {
	image: string,
	widthOfImage?: string,
	heigthOfImage?: string,
	alt: string,
};

export const ImageComponent = memo((props: imageProps) => {
	const { image, widthOfImage, heigthOfImage, alt } = props;
	return <img src={image} style={{ width: widthOfImage, heigth: heigthOfImage }} alt={alt} />;
});
