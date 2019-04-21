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
	({ placeholder, getRef, backgroundColor, handleChange, value }: SearchHeaderInputProps): Node => {
		return (
			<InputComponent
				placeholder={placeholder}
				className="form-input-header"
				getRef={getRef}
				backgroundColor={backgroundColor}
				handleChange={handleChange}
				value={value}
			/>
		);
	}
);

SearchHeaderInput.defaultProps = {
	placeholder: "Поиск товаров",
	getRef: () => {},
};
