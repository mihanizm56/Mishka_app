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
		<>
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<InputComponent
					placeholder={placeholder}
					className={getClass({ initialClass: "form-input-header", big: true })}
					getRef={getRef}
					backgroundColor={backgroundColor}
				/>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<InputComponent
					placeholder={placeholder}
					className={getClass({ initialClass: "form-input-header", middle: true })}
					getRef={getRef}
					backgroundColor={backgroundColor}
				/>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<InputComponent
					placeholder={placeholder}
					className={getClass({ initialClass: "form-input-header", small: true })}
					getRef={getRef}
				/>
			</MediaQuery>
		</>
	);
};

SearchHeaderInput.defaultProps = {
	placeholder: "default form placeholder",
};
