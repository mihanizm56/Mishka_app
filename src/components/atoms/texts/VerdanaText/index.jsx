//
import React, { Node, createRef } from "react";
import "./VerdanaText.css";
import { getClass } from "../../../../utils";

type VerdanaTextProps = {
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

export const VerdanaText = (props: VerdanaTextProps): Node => {
	const { text, bold, inlineStyles, classname, hovered, ligth, title, needRef, handleClick, withRefClick } = props;
	const OpenSansRef = needRef ? createRef() : null;

	return (
		<p
			style={{ ...inlineStyles }}
			title={title}
			className={getClass({
				initialClass: "verdana-text",
				bold: bold,
				hovered: hovered,
				ligth: ligth,
				additionalClass: classname,
			})}
			ref={needRef && OpenSansRef}
			onClick={needRef && withRefClick ? () => withRefClick(OpenSansRef) : handleClick}
		>
			{text}
		</p>
	);
};

VerdanaText.defaultProps = {
	text: "default Verdana text",
};
