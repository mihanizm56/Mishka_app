// @flow
import React, { memo } from "react";
import MediaQuery from "react-responsive";
import { GreenCard } from "../../";
import "./HouseBox.css";
import { ImageForPage, VerdanaText } from "../../../../components";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";
import {
	HOUSE_WIDTH_SMALL,
	HOUSE_HEIGHT_SMALL,
	HOUSE_WIDTH_MIDDLE,
	HOUSE_HEIGHT_MIDDLE,
	HOUSE_WIDTH_BIG,
	HOUSE_HEIGHT_BIG,
} from "./constants";
import zigzagPhotoBig from "../../../../images/pictures/zigZag/img/zigzag-big.png";
import zigzagPhotoMiddle from "../../../../images/pictures/zigZag/img/zigzag-mid.png";

const dataForGreenCards = {
	first: {
		text: "Предметы интерьера",
		icon: "vase",
		backgroundColor: "#63D1BB",
	},
	second: {
		text: "Детские игрушки",
		icon: "toy",
		backgroundColor: "#56C3B2",
	},
};

const configForHouseImage = {
	widthSmall: HOUSE_WIDTH_SMALL,
	heightSmall: HOUSE_HEIGHT_SMALL,
	widthMiddle: HOUSE_WIDTH_MIDDLE,
	heightMiddle: HOUSE_HEIGHT_MIDDLE,
	widthBig: HOUSE_WIDTH_BIG,
	heightBig: HOUSE_HEIGHT_BIG,
};

export const HouseBox = memo(() => {
	return (
		<>
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<div className="house-box-wrapper house-box-wrapper--big">
					<div className="house-box-photo-container house-box-photo-container--big">
						<div className="house-box__background-color-box house-box__background-color-box--big" />
						<div className="fake-photo-house fake-photo-house--big">
							<ImageForPage image="house-index" configForImage={configForHouseImage} />
							<div className="house-box-main-title house-box-main-title--big">
								<VerdanaText text="Милые штуки ручной работы для дома" classname="main-title" bold />
							</div>
						</div>
						<div className="house-box-cards-container house-box-cards-container--big">
							<GreenCard
								text={dataForGreenCards.first.text}
								icon={dataForGreenCards.first.icon}
								backgroundColor={dataForGreenCards.first.backgroundColor}
							/>
							<GreenCard
								text={dataForGreenCards.second.text}
								icon={dataForGreenCards.second.icon}
								backgroundColor={dataForGreenCards.second.backgroundColor}
							/>
						</div>
						<div>
							<div
								style={{ backgroundImage: `url(${zigzagPhotoBig})` }}
								className="house-box__zigzag-box house-box__zigzag-box--big"
							/>
						</div>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<div className="house-box-wrapper house-box-wrapper--mid">
					<div className="house-box__background-color-box house-box__background-color-box--mid" />
					<div className="house-box-photo-container house-box-photo-container--mid">
						<div className="fake-photo-house fake-photo-house--mid">
							<ImageForPage image="house-index" configForImage={configForHouseImage} />
							<div className="house-box-main-title house-box-main-title--mid">
								<VerdanaText text="Милые штуки ручной работы для дома" classname="main-title" bold />
							</div>
						</div>
						<div className="house-box-cards-container house-box-cards-container--mid">
							<GreenCard
								text={dataForGreenCards.first.text}
								icon={dataForGreenCards.first.icon}
								backgroundColor={dataForGreenCards.first.backgroundColor}
							/>
							<GreenCard
								text={dataForGreenCards.second.text}
								icon={dataForGreenCards.second.icon}
								backgroundColor={dataForGreenCards.second.backgroundColor}
							/>
						</div>
						<div>
							<div
								style={{ backgroundImage: `url(${zigzagPhotoMiddle})` }}
								className="house-box__zigzag-box house-box__zigzag-box--mid"
							/>
						</div>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<div className="house-box-wrapper house-box-wrapper--small">
					<div className="house-box__background-color-box house-box__background-color-box--small" />
					<div className="fake-photo-house fake-photo-house--small">
						<ImageForPage image="house-index" configForImage={configForHouseImage} />
						<div className="house-box-main-title house-box-main-title--small">
							<VerdanaText text="Милые штуки ручной работы для дома" classname="main-title" bold />
						</div>
					</div>
					<div className="house-box-cards-container house-box-cards-container--small">
						<GreenCard
							text={dataForGreenCards.first.text}
							icon={dataForGreenCards.first.icon}
							backgroundColor={dataForGreenCards.first.backgroundColor}
						/>
						<GreenCard
							text={dataForGreenCards.second.text}
							icon={dataForGreenCards.second.icon}
							backgroundColor={dataForGreenCards.second.backgroundColor}
						/>
					</div>
				</div>
			</MediaQuery>
		</>
	);
});
