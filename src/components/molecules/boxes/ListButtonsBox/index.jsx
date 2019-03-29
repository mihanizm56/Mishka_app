// @flow
import React from "react";
import { IconButton } from '../../../components/buttons';
import "./ListButtonsBox.css";

type ListButtonsBoxPropTypes = {
	onNextClick: () => void,
	onPrevClick: () => void,
};

export const ListButtonsBox = (props: ListButtonsBoxPropTypes) => {
	const { onNextClick, onPrevClick } = props;
	return (
		<div className="list-buttons-container">
			<IconButton classname='button-arrow_prev' icon='arrow' handleClick={onPrevClick} />
			<IconButton classname='button-arrow_next' icon='arrow' handleClick={onNextClick} />
		</div>
	);
};

ListButtonsBox.defaultProps = {
	onNextClick: () => { },
	onPrevClick: () => { },
};