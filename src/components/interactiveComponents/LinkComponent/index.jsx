import React from "react";
import { Link } from "react-router-dom";

export const LinkComponent = ({ route, WrappedComponent, customFontSize, text, icon, usualLink }) => {
	return usualLink ? (
		<a href={route} style={{ textDecoration: "none" }}>
			<WrappedComponent text={text} customFontSize={customFontSize} icon={icon} />
		</a>
	) : (
		<Link to={`/${route}`} style={{ textDecoration: "none" }}>
			<WrappedComponent text={text} customFontSize={customFontSize} icon={icon} />
		</Link>
	);
};
