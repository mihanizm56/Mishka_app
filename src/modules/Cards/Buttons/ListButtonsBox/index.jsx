// @flow
import React from "react";
import { ButtonWithIcon } from "../../../../components";
import "./ListButtonsBox.css";

export const ListButtonsBox = ({ onNextClick, onPrevClick }) => {
	return (
		<div className="list-buttons-container">
			<div className="button-arrow_prev">
				<ButtonWithIcon icon="arrow" width="50px" height="26px" />
			</div>
			<div className="button-arrow_next">
				<ButtonWithIcon icon="arrow" width="50px" height="26px" />
			</div>
		</div>
	);
};

ListButtonsBox.defaultProps = {
	onNextClick: () => console.log("check click forwards on ListButtonsBox"),
	onPrevClick: () => console.log("check click forwards on ListButtonsBox"),
};
