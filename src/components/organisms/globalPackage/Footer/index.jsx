import React, { memo } from "react";
import { LinkComponent, InteractiveSVGIcon, VerdanaText } from "../../../../components";
import "./Footer.css";

export const Footer = memo(props => {
	return (
		<div className="footer-container">
			<div className="footer-container__special-background" />
			<div className="footer-container__logo">
				<LinkComponent
					WrappedComponent={InteractiveSVGIcon}
					icon="logo-footer"
					route="https://htmlacademy.ru/"
					usualLink
				/>
			</div>
			<div className="footer-container__footer-icon-container">
				<LinkComponent
					WrappedComponent={InteractiveSVGIcon}
					icon="instagram"
					route="https://www.instagram.com"
					usualLink
				/>
				<LinkComponent
					WrappedComponent={InteractiveSVGIcon}
					icon="facebook"
					route="https://www.facebook.com"
					usualLink
				/>
				<LinkComponent WrappedComponent={InteractiveSVGIcon} icon="twitter" route="https://www.twitter.com" usualLink />
			</div>
			<div className="footer-container__academy-container">
				<VerdanaText text="Разработано" classname="footer__text-logo" bold />
				<InteractiveSVGIcon icon="academy" />
			</div>
		</div>
	);
});
