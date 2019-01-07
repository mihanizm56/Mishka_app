import React from "react";
import "rheostat/initialize";
import "./reostat.css";

import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handleSlider = (value, ACMin, ACMax) => {
	// console.log("check handleSlider");
	// console.log(value);
	const minValue = value[0];
	const maxValue = value[1];
	if (value[0]) {
		ACMin(minValue);
	}
	ACMin(maxValue);
};

const wrapperStyle = { width: 400, margin: 50 };

export const Reostat = props => {
	const { changeMinFilterValue, changeMaxFilterValue, minValue, maxValue } = props;
	console.log("Reostat props");
	console.log(props);
	return (
		<div style={wrapperStyle}>
			<p>Slider with custom handle</p>
			<Range
				min={+minValue}
				max={+maxValue}
				defaultValue={[0, +maxValue]}
				tipFormatter={value => `${value} руб.`}
				pushable={true}
				onChange={value => handleSlider(value, changeMinFilterValue, changeMaxFilterValue)}
			/>
		</div>
	);
};
