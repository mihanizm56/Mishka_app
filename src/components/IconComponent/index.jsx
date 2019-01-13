// @flow
import React from "react";
import "./IconComponent.css";

type iconProps = {
	image: string,
	widthOfImage: string,
	heigthOfImage: string,
	alt: string,
};

export const IconComponent = (props: iconProps) => {
	const { image, widthOfImage, heigthOfImage, alt } = props;
	return <div style={{ width: widthOfImage, heigth: heigthOfImage, backgroundImage: image }} alt={alt} />;
};
