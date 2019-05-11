import React from "react";
import { SVGIcon, OpenSansText } from "../../../atoms";
import { errors, EMPTY_STRING } from "../../../../constants";
import "./ErrorBox.css";

const getTextForError = value => (errors[value] ? errors[value] : EMPTY_STRING);

export const ErrorBox = ({ errorType }) => {
	console.log("/////////////////////", errorType, getTextForError(errorType));
	return (
		<div className="error-box-wrapper">
			<SVGIcon icon="error" />
			<div className="error-box__text-container">
				<OpenSansText text={getTextForError(errorType)} classname="error-box__text" bold />
			</div>
		</div>
	);
};
