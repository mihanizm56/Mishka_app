// @flow
import React, { createRef } from "react";
import "./OpenSansText.css";
import { getClass } from "../../../../utils";

type OpenSansTextProps = {
	text: string,
	bold?: boolean,
	classname?: string,
	hovered?: boolean,
	inlineStyles?: Object,
	ligth?: boolean,
	title?: string,
	needRef?: boolean,
	handleClick?: Function,
	withRefClick?: Function,
};

export const OpenSansText = ({
	text,
	bold,
	inlineStyles,
	classname,
	hovered,
	ligth,
	title,
	// needRef,
	handleClick,
	withRefClick,
}: OpenSansTextProps) => {
	// const OpenSansRef = needRef ? createRef() : null;

	return (
		<p
			style={{ ...inlineStyles }}
			title={title}
			className={getClass({
				initialClass: "open-sans-text",
				bold: bold,
				hovered: hovered,
				ligth: ligth,
				additionalClass: classname,
			})}
			// ref={needRef && OpenSansRef}
			// onClick={needRef && withRefClick ? () => withRefClick(OpenSansRef) : handleClick}
		>
			{text}
		</p>
	);
};

OpenSansText.defaultProps = {
	text: "default OpenSans text",
};
