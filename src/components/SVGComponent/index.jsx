// @flow
import React from "react";
import SVG from "react-inlinesvg";
import "./SVGComponent.css";

type SVGType = {
	path: string,
};

export const SVGComponent = ({ path }: SVGType) => <SVG src={`${path}`} className="icon" alt="icon" />;
