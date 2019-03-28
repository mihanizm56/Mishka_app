// @flow
import React, { Node } from "react";
import { Paragraph } from "../";
import "./TextForVideo.css";

type TextForVideoProps = {
	text: string,
};

export const TextForVideo = ({ text }: TextForVideoProps): Node => <Paragraph text={text} className="text-video" />;
