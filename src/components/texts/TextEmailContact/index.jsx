// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./TextEmailContact.css";

type TextEmailContactProps = {
	text: string,
};

export const TextEmailContact = ({ text }: TextEmailContactProps): Node => (
	<Paragraph text={text} className="text-email-contact" title="Нажмите, чтобы скопировать" />
);
