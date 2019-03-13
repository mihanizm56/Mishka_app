// @flow
import React, { Node } from "react";
import MediaQuery from "react-responsive";
import { InputComponent } from "../";
import "./FormTextInput.css";

type FormTextInputProps = {
	placeholder: string,
	getRef: any,
	backgroundColor?: string,
};

export const FormTextInput = ({ placeholder, getRef, backgroundColor }: FormTextInputProps): Node => {
	return (
		<>
			<MediaQuery minWidth={1201}>
				<InputComponent
					placeholder={placeholder}
					className="form-input"
					getRef={getRef}
					backgroundColor={backgroundColor}
				/>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<InputComponent
					placeholder={placeholder}
					className="form-input"
					getRef={getRef}
					backgroundColor={backgroundColor}
				/>
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				<InputComponent placeholder={placeholder} className="form-input" getRef={getRef} />
			</MediaQuery>
		</>
	);
};

FormTextInput.defaultProps = {
	placeholder: "default form placeholder",
};
