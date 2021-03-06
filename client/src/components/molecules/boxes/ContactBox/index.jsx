//
import React, { PureComponent } from "react";
import MediaQuery from "react-responsive";
import { SVGIcon, OpenSansText, ImageForPage, VerdanaText, MapBox, Button } from "../../../../components";
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
	email: string,
	city: string,
	street: string,
	block: string,
};

const configForZigzagImage = {
	widthMin: ZIGZAG_WIDTH_SMALL,
	heightMin: ZIGZAG_HEIGHT_SMALL,
	widthMiddle: ZIGZAG_WIDTH_MIDDLE,
	heightMiddle: ZIGZAG_HEIGHT_MIDDLE,
	widthBig: ZIGZAG_WIDTH_BIG,
	heightBig: ZIGZAG_HEIGHT_BIG,
};

export class ContactBox extends PureComponent<propsType> {
	static defaultProps = {
		email: "test-email",
		city: "г. Dafault-Петербург,",
		street: "ул. Dafault Конюшенная,",
		block: "д. 19/8, test 101",
	};

	handleClick = ref => {
		if (ref) {
			const {
				current: { innerText },
			} = ref;
			if (innerText) {
				this.copyTextToClipboard(innerText);
				// console.log("check element", innerText);
			}
		}
	};

	copyTextToClipboard = text => {
		const textArea = document.createElement("textarea");

		textArea.style = {
			position: "fixed",
			top: 0,
			left: 0,
			width: "2em",
			height: "2em",
			padding: 0,
			border: "none",
			outline: "none",
			boxShadow: "none",
			background: "transparent",
		};

		textArea.value = text;

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			var successful = document.execCommand("copy");
			var msg = successful ? "successful" : "unsuccessful";
			console.log("Copying text command was " + msg);
		} catch (err) {
			console.log("Oops, unable to copy");
		}

		document.body.removeChild(textArea);
	};

	render() {
		////написать парсер для адреса
		const { email, city, street, block } = this.props;

		return (
			<div className="contact-box-wrapper">
				<MediaQuery minWidth={BIG_MEDIA_SIZE}>
					<div className="zig-zag-second-container zig-zag-second-container--big">
						<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
					</div>
					<div className="contact-box-main-content">
						<div className="contacts-container">
							<div className="contacts-title-container">
								<SVGIcon icon="flag" />
								<VerdanaText text="Контакты" classname="main-title" bold />
							</div>
							<div className="contacts-email-container">
								<OpenSansText classname="text-video" text="e-mail" />
								<span className="email-wrapper">
									<OpenSansText classname="text-email-contact" text={email} handleClick={this.handleClick} needRef />
								</span>
							</div>
							<div className="contacts-adress">
								<OpenSansText classname="text-video" text="адрес:" />
								<div className="contacts-adress__text-value">
									<OpenSansText classname="text-video" text={city} />
									<OpenSansText classname="text-video" text={street} />
									<OpenSansText classname="text-video" text={block} />
								</div>
							</div>
							<div className="contacts-button">
								<Button classname="button-offer-wrapper" text="сделать заказ" />
							</div>
						</div>
						<div className="contact-box__map-wrapper" >
							<MapBox />
						</div>
					</div>
				</MediaQuery>
				<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
					<div className="contacts-title-container">
						<VerdanaText text="Контакты" classname="main-title" bold />
						<SVGIcon icon="flag" />
					</div>
					<div className="contacts-additional-wrapper">
						<div className="contacts-email-container">
							<OpenSansText classname="text-video" text="e-mail" />
							<OpenSansText classname="text-email-contact" text={email} handleClick={this.handleClick} needRef />
						</div>
						<div className="contacts-adress">
							<OpenSansText classname="text-video" text="адрес:" />
							<div className="contacts-adress__text-value">
								<OpenSansText classname="text-video" text={city} />
								<OpenSansText classname="text-video" text={street} />
								<OpenSansText classname="text-video" text={block} />
							</div>
						</div>
					</div>
					<div className="contact-box__map-wrapper" >
						<MapBox />
					</div>
					<div className="contacts-button">
						<Button classname="button-offer-wrapper" text="сделать заказ" />
					</div>
					<div className="zig-zag-second-container zig-zag-second-container--mid">
						<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
					</div>
				</MediaQuery>
				<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
					<div className="contacts-title-container">
						<VerdanaText text="Контакты" classname="main-title" bold />
					</div>
					<div className="contacts-additional-wrapper">
						<div className="contacts-email-container">
							<OpenSansText classname="text-video" text="e-mail" />
							<OpenSansText classname="text-email-contact" text={email} handleClick={this.handleClick} needRef />
						</div>
						<div className="contacts-adress">
							<OpenSansText classname="text-video" text="адрес:" />
							<div className="contacts-adress__text-value">
								<OpenSansText classname="text-video" text={city} />
								<OpenSansText classname="text-video" text={street} />
								<OpenSansText classname="text-video" text={block} />
							</div>
						</div>
					</div>
					<div className="contact-box__map-wrapper" >
						<MapBox />
					</div>
					<div className="contacts-button">
						<Button classname="button-offer-wrapper" text="Напишите нам" />
					</div>
					<div className="zig-zag-second-container zig-zag-second-container--small">
						<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
					</div>
				</MediaQuery>
			</div>
		);
	}
}
