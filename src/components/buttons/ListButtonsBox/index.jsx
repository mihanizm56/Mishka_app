// @flow
import React from "react";
import { InteractiveSVGIcon } from "../../../components";
import "./ListButtonsBox.css";

// type ListButtonsBoxPropTypes = {
// 	onNextClick, onPrevClick
// }

export const ListButtonsBox = (props: ListButtonsBoxPropTypes) => {
	const { onNextClick, onPrevClick } = props;
	console.log("ListButtonsBox props");
	console.log(props);
	return (
		<div className="list-buttons-container">
			<div className="button-arrow_prev">
				<InteractiveSVGIcon icon="arrow" handleClick={onPrevClick} />
			</div>
			<div className="button-arrow_next">
				<InteractiveSVGIcon icon="arrow" handleClick={onNextClick} />
			</div>
		</div>
	);
};

ListButtonsBox.defaultProps = {
	onNextClick: () => console.log("check click forwards on ListButtonsBox"),
	onPrevClick: () => console.log("check click forwards on ListButtonsBox"),
};