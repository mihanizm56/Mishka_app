// @flow
import React from "react";
import "./TrueCheckBox.css";

export const TrueCheckBox = ({ placeholder, getRef, backgroundColor, text = "label" }) => {
	return (
		<label className="check">
			<input className="check__input" type="checkbox" />
			<span className="check__box" />
			{text}
		</label>
	);
};
