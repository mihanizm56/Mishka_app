import React, { Component } from "react";
import { InteractiveSVGIcon, LabelForOrderForm } from "../../../../components";
import "./RadioBox.css";

export class RadioBox extends Component {
	static defaultProps = {
		text: "default text",
	};

	render() {
		const { text, input:{checked} } = this.props;
		console.log('check RadioBox props')
		console.log(this.props)
		return (
			<label className="radio-box-container">
			<input className="radio-box-input" type="radio" {...this.props.input}/>
				<div className="radio-box-wrapper">
					{checked && <InteractiveSVGIcon icon="radio" />}
				</div>
				<div className="label-wrapper-radiobox">
					<LabelForOrderForm text={text} />
				</div>
			</label>
		);
	}
}
