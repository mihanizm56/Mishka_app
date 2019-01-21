// @flow
import React, { Node } from "react";
import { Paragraph } from "..";
import "./FooterTextLogo.css";

type FooterTextLogoProps = {
	text: string,
};

export const FooterTextLogo = ({ text }: FooterTextLogoProps): Node => (
	<Paragraph text={text} className="footer__text-logo" />
);
