// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ImageForPage, SVGForPage, MainTitle } from "../../../../components";

import "./WeeklyHitBox.css";

const configForWeeklyHitBoxImage = {
	// widthMin: "260px",
	// heightMin: "150px",
	// widthMiddle: "668px",
	// heightMiddle: "455px",
	widthBig: "525px",
	heightBig: "636px",
};

export const WeeklyHitBox = ({ itemName, image }) => {
	return (
		<div className="hit-box-wrapper">
			<MediaQuery minWidth={1201}>
				<div className="hit-box-title">
					<SVGForPage icon="hit" />
					<MainTitle text={itemName} />
				</div>
				<div className="hit-box-text-container">
					<div className="hit-box-text-wrapper" />
				</div>
				<ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} />
			</MediaQuery>
			{/* <MediaQuery minWidth={768} maxWidth={1200}>

			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				
			</MediaQuery> */}
		</div>
	);
};

WeeklyHitBox.defaultProps = {
	itemName: "Вязаные корзинки",
	image: "index-basket",
};
