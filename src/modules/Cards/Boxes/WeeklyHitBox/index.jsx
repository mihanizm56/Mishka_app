// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ImageForPage, SVGForPage, MainTitle, TextForVideo, FooterTextLogo, Paragraph } from "../../../../components";
import { ButtonVariable } from "../../Buttons";
import { TableForHitItem } from "../";

import "./WeeklyHitBox.css";

const configForWeeklyHitBoxImage = {
	widthMin: "100%",
	heightMin: "315px",
	widthMiddle: "333px",
	heightMiddle: "404px",
	widthBig: "525px",
	heightBig: "636px",
};

const configForZigzagImage = {
	widthMin: "100%",
	heightMin: "8px",
	widthMiddle: "100%",
	heightMiddle: "17px",
	widthBig: "100%",
	heightBig: "23px",
};

const styleForBigButtomOffer = {
	width: "98%",
	height: "50px",
	marginTop: "35px",
};

const styleForBigButtomOfferSmall = { ...styleForBigButtomOffer, marginTop: "35px" };

const descriptionOfItem = "Экологически чистая пряжа, ручная работа. Доступны в шести расцветках, и трех размерах.";

export const WeeklyHitBox = ({ itemName, image, price }) => {
	return (
		<div className="hit-box-wrapper">
			<MediaQuery minWidth={1201}>
				<div className="hit-box-main-box">
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
				</div>
				<div className="zig-zag-container zig-zag-container--big">
					<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<div className="hit-box-main-box">
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
						<ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} />
					</div>
				</div>
				<div className="zig-zag-container zig-zag-container--mid">
					<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
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
				<div className="small-hit-image-wrapper">
					<ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} />
				</div>
				<FooterTextLogo text={`Цена: ${price}`} />
				<ButtonVariable text="Заказать" customStyle={styleForBigButtomOfferSmall} />
				<div className="zig-zag-container zig-zag-container--small">
					<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
				</div>
			</MediaQuery>
		</div>
	);
};

WeeklyHitBox.defaultProps = {
	itemName: "Вязаные корзинки",
	image: "index-basket",
	price: "0 рублей",
};
