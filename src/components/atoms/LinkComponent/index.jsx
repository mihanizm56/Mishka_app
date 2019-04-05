import React, { memo } from "react";
import { Link } from "react-router-dom";

export const LinkComponent = memo(({ route, WrappedComponent, usualLink, ...restProps }) => {
	return usualLink ? (
		<a href={route} style={{ textDecoration: "none" }}>
			<WrappedComponent {...restProps} />
		</a>
	) : (
		<Link to={`/${route}`} style={{ textDecoration: "none" }}>
			<WrappedComponent {...restProps} />
		</Link>
	);
});
