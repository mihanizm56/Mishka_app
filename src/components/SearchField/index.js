import React from "react";

export const SearchField = ({ callback }) => {
	let field = React.createRef();
	return <input type="text" ref={value => (field = value)} onChange={() => callback(field.value)} />;
};
