//
import React, { Node, memo } from "react";
import { InputComponent } from "../";
import "./SearchHeaderInput.css";

type SearchHeaderInputProps = {
	placeholder: string,
	getRef: any,
	backgroundColor?: string,
};

export const SearchHeaderInput = memo(
	({ placeholder, getRef, backgroundColor }: SearchHeaderInputProps): Node => {
		return (
			<InputComponent
				placeholder={placeholder}
				className="form-input-header"
				getRef={getRef}
				backgroundColor={backgroundColor}
			/>
		);
	}
);

SearchHeaderInput.defaultProps = {
	placeholder: "Поиск default",
	getRef: () => {},
};
