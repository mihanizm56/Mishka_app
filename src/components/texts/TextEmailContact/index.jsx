// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./TextEmailContact.css";

type TextEmailContactProps = {
	text: string,
};

export const TextEmailContact = (props: TextEmailContactProps): Node => (
	<Paragraph {...props} className="text-email-contact" title="Нажмите, чтобы скопировать" />
);
