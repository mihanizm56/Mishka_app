// @flow
import React from "react";
import { ButtonVariable } from "../";
import {
	BUTTON_FOR_WEEKLY_HIT_BOX_WIDTH,
	BUTTON_FOR_WEEKLY_HIT_BOX_HEIGHT,
	BUTTON_FOR_WEEKLY_HIT_BOX_MARGIN_TOP,
} from "./constants";

type ButtonForWeeklyHitBoxType = {
	callback: () => void,
};

const customButtonStyle = {
	width: BUTTON_FOR_WEEKLY_HIT_BOX_WIDTH,
	height: BUTTON_FOR_WEEKLY_HIT_BOX_HEIGHT,
	marginTop: BUTTON_FOR_WEEKLY_HIT_BOX_MARGIN_TOP,
};

export const ButtonForWeeklyHitBox = ({ callback }: ButtonForWeeklyHitBoxType) => {
	return <ButtonVariable text="Заказать" callback={callback} customStyle={customButtonStyle} />;
};

ButtonForWeeklyHitBox.defaultProps = {
	callback: () => {},
};
