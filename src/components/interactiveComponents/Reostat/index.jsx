// @flow
import React from "react";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import "./reostat.css";
import Slider from "rc-slider";
import { findTopPrice } from "../../../helpers";
import { ACReturns } from "../../../actions";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

type handleSliderType = {
	value: Array<number>,
	ACMin: (number: number) => ACReturns,
	ACMax: (number: number) => ACReturns,
};

const handleSlider = (value: handleSliderType.value, ACMin: handleSliderType.ACMin, ACMax: handleSliderType.ACMax) => {
	const minValue = value[0];
	const maxValue = value[1];
	if (value[0]) {
		ACMin(minValue);
	}
	ACMax(maxValue);
};

export const Reostat = props => {
	const { changeMinFilterValue, changeMaxFilterValue, shopItems } = props;
	const maxValueOfItems = findTopPrice(shopItems);
	return (
		<Range
			min={0}
			max={maxValueOfItems}
			defaultValue={[0, maxValueOfItems]}
			tipFormatter={value => `${value} руб.`}
			pushable={true}
			onChange={value => handleSlider(value, changeMinFilterValue, changeMaxFilterValue)}
		/>
	);
};
