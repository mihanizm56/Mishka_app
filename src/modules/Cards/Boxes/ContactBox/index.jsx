// @flow
import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { SVGForPage, MainTitle, TextForVideo, ImageForPage } from "../../../../components";
import { ButtonForOffer } from "../../Buttons";
// import {MapContainer} from '../'
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";
import {
	ZIGZAG_WIDTH_BIG,
	ZIGZAG_HEIGHT_BIG,
	ZIGZAG_WIDTH_MIDDLE,
	ZIGZAG_HEIGHT_MIDDLE,
	ZIGZAG_WIDTH_SMALL,
	ZIGZAG_HEIGHT_SMALL,
} from "./constants";
import "./ContactBox.css";

type propsType = {
	emailAdress: string,
	adressCityValue: string,
	adressStreetValue: string,
	adressBlockValue: string,
};

const configForZigzagImage = {
	widthMin: ZIGZAG_WIDTH_SMALL,
	heightMin: ZIGZAG_HEIGHT_SMALL,
	widthMiddle: ZIGZAG_WIDTH_MIDDLE,
	heightMiddle: ZIGZAG_HEIGHT_MIDDLE,
	widthBig: ZIGZAG_WIDTH_BIG,
	heightBig: ZIGZAG_HEIGHT_BIG,
};

export class ContactBox extends Component<propsType> {
	static defaultProps = {
		emailAdress: "test-email",
		adressCityValue: "г. Dafault-Петербург,",
		adressStreetValue: "ул. Dafault Конюшенная,",
		adressBlockValue: "д. 19/8, test 101",
	};
	render() {
		const { emailAdress, adressCityValue, adressStreetValue, adressBlockValue } = this.props;
		return (
			<div className="contact-box-wrapper">
				<MediaQuery minWidth={BIG_MEDIA_SIZE}>
					{/* <MapContainer /> */}
					<div className="zig-zag-second-container zig-zag-second-container--big">
						<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
					</div>
					<div className="contact-box-main-content">
						<div className="contacts-container">
							<div className="contacts-title-container">
								<SVGForPage icon="flag" />
								<MainTitle text="Контакты" />
							</div>
							<div className="contacts-email-container">
								<TextForVideo text="e-mail" />
								<span className="email-wrapper">
									<TextForVideo text={emailAdress} />
								</span>
							</div>
							<div className="contacts-adress">
								<TextForVideo text="адрес:" />
								<div className="contacts-adress__text-value">
									<TextForVideo text={adressCityValue} />
									<TextForVideo text={adressStreetValue} />
									<TextForVideo text={adressBlockValue} />
								</div>
							</div>
							<div className="contacts-button">
								<ButtonForOffer />
							</div>
						</div>
						<div className="contact-box__image-imitation" />
					</div>
				</MediaQuery>
				<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
					<div className="contacts-title-container">
						<MainTitle text="Контакты" />
						<SVGForPage icon="flag" />
					</div>
					<div className="contacts-additional-wrapper">
						<div className="contacts-email-container">
							<TextForVideo text="e-mail" />
							<TextForVideo text={emailAdress} />
						</div>
						<div className="contacts-adress">
							<TextForVideo text="адрес:" />
							<div className="contacts-adress__text-value">
								<TextForVideo text={adressCityValue} />
								<TextForVideo text={adressStreetValue} />
								<TextForVideo text={adressBlockValue} />
							</div>
						</div>
					</div>
					<div className="contact-box__image-imitation" />
					<div className="contacts-button">
						<ButtonForOffer />
					</div>
					<div className="zig-zag-second-container zig-zag-second-container--mid">
						<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
					</div>
				</MediaQuery>
				<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
					<div className="contacts-title-container">
						<MainTitle text="Контакты" />
					</div>
					<div className="contacts-additional-wrapper">
						<div className="contacts-email-container">
							<TextForVideo text="e-mail" />
							<TextForVideo text={emailAdress} />
						</div>
						<div className="contacts-adress">
							<TextForVideo text="адрес:" />
							<div className="contacts-adress__text-value">
								<TextForVideo text={adressCityValue} />
								<TextForVideo text={adressStreetValue} />
								<TextForVideo text={adressBlockValue} />
							</div>
						</div>
					</div>
					<div className="contact-box__image-imitation" />
					<div className="contacts-button">
						<ButtonForOffer text="Напишите нам" />
					</div>
					<div className="zig-zag-second-container zig-zag-second-container--small">
						<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
					</div>
				</MediaQuery>
			</div>
		);
	}
}
