import React, { Component } from "react";
import { InteractiveSVGIcon, LabelForOrderForm } from "../../../../components";
import "./CheckBox.css";

export class CheckBox extends Component {
	static defaultProps = {
		text: "default text",
		withRef: () => {},
	};

	state = {
		checked: true,
	};

	handleCheckBoxChange = () => {
		this.setState(prevState => ({ checked: !prevState.checked }));
	};

	render() {
		const { text } = this.props;
		const { checked } = this.state;
		return (
			<div className="check-box-container">
				<div className="check-box-wrapper" onClick={this.handleCheckBoxChange}>
					{checked && <InteractiveSVGIcon icon="check" />}
				</div>
				<div className="label-wrapper">
					<LabelForOrderForm text={text} />
				</div>
			</div>
		);
	}
}
