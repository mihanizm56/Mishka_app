import React from "react";
import MediaQuery from "react-responsive";
import { MainTitle } from "../../../../components";
import { zigzagBigImage, zigzagMiddleImage } from "../../../../images/pictures/zigZag";
import "./SpecialHeaderBlock.css";

//zigzagMiddleImage
//zigzagBigImage

export const SpecialHeaderBlock = ({ page }) => {
	return (
		<div className="special-header-block-wrapper">
			<MainTitle text="Каталог товаров" />
			<MediaQuery minWidth={1201}>
				<div className="special-header-block__icon-zigzag" style={{ backgroundImage: `url(${zigzagBigImage})` }} />
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<div className="special-header-block__icon-zigzag" style={{ backgroundImage: `url(${zigzagMiddleImage})` }} />
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				<div className="special-header-block__special-background" />
			</MediaQuery>
		</div>
	);
};
