// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ImageForPage, SVGForPage, MainTitle, TextForVideo, FooterTextLogo, Paragraph } from "../../../../components";
import { ButtonVariable } from "../../Buttons";
import { TableForHitItem } from "../";

import "./WeeklyHitBox.css";

const configForWeeklyHitBoxImage = {
	// widthMin: "260px",
	// heightMin: "150px",
	widthMiddle: "333px",
	heightMiddle: "404px",
	widthBig: "525px",
	heightBig: "636px",
};

const styleForBigButtomOffer = {
	width: "98%",
	height: "50px",
	marginTop: "12px",
};

const styleForBigButtomOfferSmall = { ...styleForBigButtomOffer, marginTop: "35px" };

// const styleForSpecialParagraph = {
// 	color: "#63D1BB",
// 	fontFamily
// };

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
				{/* <ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} /> */}
				<div style={{ width: "525px", height: "636px", border: "1px solid green" }} />
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<div className="hit-box-title">
					<MainTitle text={itemName} />
					<SVGForPage icon="hit" />
				</div>
				<div className="hit-box-text-container">
					<div className="hit-box-text-wrapper">
						<TextForVideo text={descriptionOfItem} />
						<TableForHitItem />
						<FooterTextLogo text={`Цена: ${price}`} />
						<ButtonVariable text="Заказать" customStyle={styleForBigButtomOffer} />
					</div>
					<div style={{ width: "333px", height: "404px", border: "1px solid green" }} />
					{/* <ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} /> */}
				</div>
			</MediaQuery>

			<MediaQuery minWidth={320} maxWidth={767}>
				<div className="hit-box-title">
					<MainTitle text={itemName} />
					<Paragraph text="Товар недели" className="green-paragraph-index-small" />
				</div>
				<div className="hit-box-text-wrapper">
					<TextForVideo text={descriptionOfItem} />
					<TableForHitItem />
				</div>
				<div
					style={{ width: "100%", maxWidth: "260px", height: "315px", border: "1px solid green", marginBottom: "35px" }}
				/>
				<FooterTextLogo text={`Цена: ${price}`} />
				<ButtonVariable text="Заказать" customStyle={styleForBigButtomOfferSmall} />
				{/* <ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} /> */}
			</MediaQuery>
		</div>
	);
};

WeeklyHitBox.defaultProps = {
	itemName: "Вязаные корзинки",
	image: "index-basket",
	price: "0 рублей",
};
