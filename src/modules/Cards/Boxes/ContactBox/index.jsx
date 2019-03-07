// @flow
import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { SVGForPage, MainTitle, TextForVideo, ImageForPage } from "../../../../components";
import { ButtonForOffer } from "../../Buttons";
// import {MapContainer} from '../'
import "./ContactBox.css";

type propsType = {
	emailAdress: string,
	adressCityValue: string,
	adressStreetValue: string,
	adressBlockValue: string,
};

const configForZigzagImage = {
	widthMin: "100%",
	heightMin: "8px",
	widthMiddle: "100%",
	heightMiddle: "17px",
	widthBig: "100%",
	heightBig: "23px",
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
				<MediaQuery minWidth={1201}>
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
				<MediaQuery minWidth={768} maxWidth={1200}>
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
				<MediaQuery minWidth={320} maxWidth={767}>
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
