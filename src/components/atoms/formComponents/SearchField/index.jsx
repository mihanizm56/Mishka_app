// @flow
import React from "react";
import { ACReturns } from "../../../../actions";

type SearchFieldProps = {
	callback: (value: string) => ACReturns,
};

export const SearchField = (props: SearchFieldProps) => {
	const { callback } = props;
	let field = React.createRef();
	return <input type="text" ref={value => (field = value)} onChange={() => callback(field.value)} />;
};
