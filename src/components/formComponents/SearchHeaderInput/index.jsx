// @flow
import React, { Node } from "react";
import MediaQuery from "react-responsive";
import { InputComponent } from "../";
import { getClass } from "../../../helpers";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";
import "./SearchHeaderInput.css";

type SearchHeaderInputProps = {
	placeholder: string,
	getRef: any,
	backgroundColor?: string,
};

export const SearchHeaderInput = ({ placeholder, getRef, backgroundColor }: SearchHeaderInputProps): Node => {
	return (
		<InputComponent
			placeholder={placeholder}
			className="form-input-header"
			getRef={getRef}
			backgroundColor={backgroundColor}
		/>
	);
};

SearchHeaderInput.defaultProps = {
	placeholder: "Поиск default",
	getRef: () => {},
};
