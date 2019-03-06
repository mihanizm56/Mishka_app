// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { GreenCard } from "../../";
import "./HouseBox.css";
import { MainTitle, ImageForPage } from "../../../../components";

import zigzagPhotoBig from "../../../../images/pictures/zigZag/img/zigzag-big.png";
import zigzagPhotoMiddle from "../../../../images/pictures/zigZag/img/zigzag-mid.png";

// <div style={{ backgroundImage: `url(${zigzagPhotoMiddle})` }} className="under-header-box__zigzag-box" />

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
	widthSmall: "100%",
	heightSmall: "500px",
	widthMiddle: "100%",
	heightMiddle: "600px",
	widthBig: "550px",
	heightBig: "600px",
};

export const HouseBox = () => {
	return (
		<>
			<MediaQuery minWidth={1201}>
				<div className="house-box-wrapper house-box-wrapper--big">
					<div className="house-box-photo-container house-box-photo-container--big">
						<div className="house-box__background-color-box house-box__background-color-box--big" />
						<div className="fake-photo-house fake-photo-house--big">
							<ImageForPage image="house-index" configForImage={configForHouseImage} />
							<div className="house-box-main-title house-box-main-title--big">
								<MainTitle text="Милые штуки ручной работы для дома" />
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
			<MediaQuery minWidth={768} maxWidth={1200}>
				<div className="house-box-wrapper house-box-wrapper--mid">
					<div className="house-box__background-color-box house-box__background-color-box--mid" />
					<div className="house-box-photo-container house-box-photo-container--mid">
						<div className="fake-photo-house fake-photo-house--mid">
							<ImageForPage image="house-index" configForImage={configForHouseImage} />
							<div className="house-box-main-title house-box-main-title--mid">
								<MainTitle text="Милые штуки ручной работы для дома" />
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
			<MediaQuery minWidth={320} maxWidth={767}>
				<div className="house-box-wrapper house-box-wrapper--small">
					<div className="house-box__background-color-box house-box__background-color-box--small" />
					<div className="fake-photo-house fake-photo-house--small">
						<ImageForPage image="house-index" configForImage={configForHouseImage} />
						<div className="house-box-main-title house-box-main-title--small">
							<MainTitle text="Милые штуки ручной работы для дома" />
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
};
