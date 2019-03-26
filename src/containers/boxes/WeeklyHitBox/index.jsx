// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ImageForPage, SVGForPage, MainTitle, OpenSansText, FooterTextLogo, Paragraph } from "../../../components";
import { ButtonForWeeklyHitBox } from "../../../components";
import { TableForHitItem } from "../";
import { configForWeeklyHitBoxImage, configForZigzagImage } from "./constants";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";

import "./WeeklyHitBox.css";

const descriptionOfItem = "Экологически чистая пряжа, ручная работа. Доступны в шести расцветках, и трех размерах.";

export const WeeklyHitBox = ({ itemName, image, price }) => {
	return (
		<div className="hit-box-wrapper">
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<div className="hit-box-main-box">
					<div className="hit-box-title">
						<SVGForPage icon="hit" />
						<MainTitle text={itemName} />
					</div>
					<div className="hit-box-text-container">
						<div className="hit-box-text-wrapper">
							<OpenSansText classname='text-video' text={descriptionOfItem} />
							<TableForHitItem />
							<FooterTextLogo text={`Цена: ${price}`} />
							<ButtonForWeeklyHitBox />
						</div>
					</div>
					<ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} />
				</div>
				<div className="zig-zag-container zig-zag-container--big">
					<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<div className="hit-box-main-box">
					<div className="hit-box-title">
						<MainTitle text={itemName} />
						<SVGForPage icon="hit" />
					</div>
					<div className="hit-box-text-container">
						<div className="hit-box-text-wrapper">
							<OpenSansText classname='text-video' text={descriptionOfItem} />
							<TableForHitItem />
							<FooterTextLogo text={`Цена: ${price}`} />
							<ButtonForWeeklyHitBox />
						</div>
						<ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} />
					</div>
				</div>
				<div className="zig-zag-container zig-zag-container--mid">
					<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
				</div>
			</MediaQuery>

			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<div className="hit-box-title">
					<MainTitle text={itemName} />
					<Paragraph text="Товар недели" className="green-paragraph-index-small" />
				</div>
				<div className="hit-box-text-wrapper">
					<OpenSansText classname='text-video' text={descriptionOfItem} />
					<TableForHitItem />
				</div>
				<div className="small-hit-image-wrapper">
					<ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} />
				</div>
				<FooterTextLogo text={`Цена: ${price}`} />
				<ButtonForWeeklyHitBox />
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
