// @flow
import React, { Node } from "react";
import MediaQuery from "react-responsive";
import { InputComponent } from "../";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../constants";
import "./FormTextInput.css";

type FormTextInputProps = {
	placeholder: string,
	getRef: any,
	backgroundColor?: string,
};

export const FormTextInput = ({ placeholder, getRef, backgroundColor }: FormTextInputProps): Node => {
	return (
		<>
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<InputComponent
					placeholder={placeholder}
					className="form-input"
					getRef={getRef}
					backgroundColor={backgroundColor}
				/>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<InputComponent
					placeholder={placeholder}
					className="form-input"
					getRef={getRef}
					backgroundColor={backgroundColor}
				/>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<InputComponent placeholder={placeholder} className="form-input" getRef={getRef} />
			</MediaQuery>
		</>
	);
};

FormTextInput.defaultProps = {
	placeholder: "default form placeholder",
};
