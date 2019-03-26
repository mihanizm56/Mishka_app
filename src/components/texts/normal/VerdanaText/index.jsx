// @flow
import React, { Node } from "react";
import "./VerdanaText.css";
import { getClass, setInlineStyle } from '../../../../helpers'

type VerdanaTextProps = {
    text: string,
};

export const VerdanaText = ({ text, fontColor, bold, fontSize, additionalClass, hovered }: VerdanaTextProps): Node => (
    <p style={setInlineStyle({ fontColor, fontSize })} className={getClass({ initialClass: 'open-sans-text', bold: bold, hovered: hovered, additionalClass })} >{text}</p>
);