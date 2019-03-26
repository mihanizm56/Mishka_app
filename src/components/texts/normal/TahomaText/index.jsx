// @flow
import React, { Node } from "react";
import "./TahomaText.css";
import { getClass } from "../../../../helpers";

type TahomaTextProps = {
    text?: string,
    fontColor?: string,
    bold?: boolean,
    fontSize?: string,
    additionalClass?: string,
    hovered?: boolean,
};

export const TahomaText = ({
    text,
    bold,
    inlineStyles,
    additionalClass,
    hovered,
}: TahomaTextProps): Node => (
        <p
            style={inlineStyles}
            className={getClass({ initialClass: "open-sans-text", bold: bold, hovered: hovered, additionalClass })}
        >
            {text}
        </p>
    );