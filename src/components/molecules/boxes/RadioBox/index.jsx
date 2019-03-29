import React, { Component } from "react";
import { InteractiveSVGIcon, LabelForOrderForm } from "../../../components";
import "./RadioBox.css";

export class RadioBox extends Component {
	static defaultProps = {
		text: "default text",
	};

	state = {
		checked: true,
	};

	handleRadioBoxChange = () => {
		this.setState(prevState => ({ checked: !prevState.checked }));
	};

	render() {
		const { text } = this.props;
		const { checked } = this.state;
		return (
			<div className="radio-box-container">
				<div className="radio-box-wrapper" onClick={this.handleRadioBoxChange}>
					{checked && <InteractiveSVGIcon icon="radio" />}
				</div>
				<div className="label-wrapper-radiobox">
					<LabelForOrderForm text={text} />
				</div>
			</div>
		);
	}
}
