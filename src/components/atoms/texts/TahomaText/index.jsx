// @flow
import React, { Node, createRef } from "react";
import "./TahomaText.css";
import { getClass } from "../../../utils";

type TahomaTextProps = {
    text: string,
    bold?: boolean,
    classname?: string,
    hovered?: boolean,
    inlineStyles?: Object,
    ligth?: boolean,
    title?: string,
    needRef?: boolean,
    handleClick?: Function,
    withRefClick?: Function
};

export const TahomaText = ({
    text,
    bold,
    inlineStyles,
    classname,
    hovered,
    ligth,
    title,
    needRef,
    handleClick,
    withRefClick
}: TahomaTextProps): Node => {
    const OpenSansRef = needRef ? createRef() : null;

    return (
        <p
            style={{ ...inlineStyles }}
            title={title}
            className={getClass({ initialClass: 'tahoma-text', bold: bold, hovered: hovered, ligth: ligth, additionalClass: classname})}
            ref={needRef && OpenSansRef}
            onClick={needRef && withRefClick ? () => withRefClick(OpenSansRef) : handleClick}
        >
            {text}
        </p>
    )
}


TahomaText.defaultProps = {
    text: 'default Tahoma text'
}
