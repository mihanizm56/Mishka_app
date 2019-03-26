// @flow
import React, { Node } from "react";
import "./VerdanaText.css";
import { getClass } from "../../../../helpers";

type VerdanaTextProps = {
    text?: string,
    fontColor?: string,
    bold?: boolean,
    fontSize?: string,
    additionalClass?: string,
    hovered?: boolean,
};

export const VerdanaText = ({
    text,
    bold,
    inlineStyles,
    additionalClass,
    hovered,
}: VerdanaTextProps): Node => (
        <p
            style={inlineStyles}
            className={getClass({ initialClass: "open-sans-text", bold: bold, hovered: hovered, additionalClass })}
        >
            {text}
        </p>
    );
