import React from "react";
import { SVGForPage, FooterTextLogo } from "../../../components";
import "./Footer.css";

export const Footer = props => {
	return (
		<div className="footer-wrapper">
			<div className="footer-container__logo">
				<SVGForPage icon="logo-footer" />
			</div>
			<div className="footer-container__footer-icon-container">
				<SVGForPage icon="instagram" />
				<SVGForPage icon="facebook" />
				<SVGForPage icon="twitter" />
			</div>
			<div className="footer-container__academy-container">
				<FooterTextLogo text="Разработано" />
				<SVGForPage icon="academy" />
			</div>
		</div>
	);
};
