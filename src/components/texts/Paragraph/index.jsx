// @flow
import React, { Node, createRef } from "react";

type ParagraphProps = {
	text: string,
	className: string,
};

export const Paragraph = ({ text, className, customFontSize, title, handleClick, needRef }: ParagraphProps): Node => {
	
	const ParagraphRef = needRef ? createRef() : null;

	return (
		<p className={className} ref={needRef && ParagraphRef} title={title} style={customFontSize ? { fontSize: customFontSize } : null} onClick={()=>handleClick(ParagraphRef)}>
			{text}
		</p>
	)
}

Paragraph.defaultProps = {
	text: 'default', 
	handleClick: (value)=>value
}