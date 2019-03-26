// @flow
import React, { Node } from "react";
import "./TahomaText.css";
import { getClass, setInlineStyle } from '../../../../helpers'

type TahomaTextProps = {
    text: string,
};

export const TahomaText = ({ text, fontColor, bold, fontSize, additionalClass, hovered }: TahomaTextProps): Node => (
    <p style={setInlineStyle({ fontColor, fontSize })} className={getClass({ initialClass: 'open-sans-text', bold: bold, hovered: hovered, additionalClass })} >{text}</p>
);