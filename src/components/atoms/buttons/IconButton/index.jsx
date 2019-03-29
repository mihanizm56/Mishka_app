// @flow
import React from "react";
import { OpenSansText } from "../../texts";
import {InteractiveSVGIcon} from '../../svgComponents'
import "./IconButton.css";

type IconButtonPropsType = {
    handleClick: () => void,
    classname: string,
    noOpacityChange?:boolean,
    icon?: string
};

export const IconButton = ({ classname, noOpacityChange, handleClick, icon }: IconButtonPropsType) => {
    return (
        <div
            onClick={handleClick}
            className={classname}
        >
            <InteractiveSVGIcon icon={icon} noOpacityChange={noOpacityChange} />
        </div>
    );
};

IconButton.defaultProps = {
    handleClick: () => { },
};
