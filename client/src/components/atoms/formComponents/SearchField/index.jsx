import React, { memo } from "react";

export const SearchField = memo((props: SearchFieldProps) => {
	const { callback } = props;
	let field = React.createRef();
	return <input type="text" ref={value => (field = value)} onChange={() => callback(field.value)} />;
});
