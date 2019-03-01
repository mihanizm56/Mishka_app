// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ImageForPage, SVGForPage, MainTitle, TextForVideo, FooterTextLogo } from "../../../../components";
import { ButtonVariable } from "../../Buttons";
import { TableForHitItem } from "../";

import "./WeeklyHitBox.css";

const configForWeeklyHitBoxImage = {
	// widthMin: "260px",
	// heightMin: "150px",
	// widthMiddle: "668px",
	// heightMiddle: "455px",
	widthBig: "525px",
	heightBig: "636px",
};

const styleForBigButtomOffer = {
	width: "98%",
	height: "50px",
	marginTop: "45px",
};

const descriptionOfItem = "Экологически чистая пряжа, ручная работа. Доступны в шести расцветках, и трех размерах.";

export const WeeklyHitBox = ({ itemName, image, price }) => {
	return (
		<div className="hit-box-wrapper">
			<MediaQuery minWidth={1201}>
				<div className="hit-box-title">
					<SVGForPage icon="hit" />
					<MainTitle text={itemName} />
				</div>
				<div className="hit-box-text-container">
					<div className="hit-box-text-wrapper">
						<TextForVideo text={descriptionOfItem} />
						<TableForHitItem />
						<FooterTextLogo text={`Цена: ${price}`} />
						<ButtonVariable text="Заказать" customStyle={styleForBigButtomOffer} />
					</div>
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
	price: "0 рублей",
};
