// @flow
import React, { Node } from "react";
import "./OpenSansText.css";
import { getClass, setInlineStyle } from "../../../../helpers";

type OpenSansTextProps = {
    text?: string,
    fontColor?: string,
    bold?: boolean,
    fontSize?: string,
    additionalClass?: string,
    hovered?: boolean,
};

export const OpenSansText = ({
    text,
    bold,
    inlineStyles,
    additionalClass,
    hovered,
}: OpenSansTextProps): Node => (
        <p
            style={setInlineStyle(inlineStyles)}
            className={getClass({ initialClass: "open-sans-text", bold: bold, hovered: hovered, additionalClass })}
        >
            {text}
        </p>
    );
