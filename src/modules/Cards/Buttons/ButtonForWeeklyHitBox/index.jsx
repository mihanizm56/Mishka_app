// @flow
import React from "react";
import { ButtonVariable } from "../";
import { BUTTON_FOR_WEEKLY_HIT_BOX_STYLE } from "./constants";

type ButtonForWeeklyHitBoxType = {
	callback: () => void,
};

export const ButtonForWeeklyHitBox = ({ callback }: ButtonForWeeklyHitBoxType) => {
	return <ButtonVariable text="Заказать" customStyle={BUTTON_FOR_WEEKLY_HIT_BOX_STYLE} />;
};

ButtonForWeeklyHitBox.defaultProps = {
	callback: () => console.log("click on ButtonForWeeklyHitBox"),
};
