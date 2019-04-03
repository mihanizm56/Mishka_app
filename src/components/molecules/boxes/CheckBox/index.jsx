import React, { Component } from "react";
import { InteractiveSVGIcon, LabelForOrderForm } from "../../../../components";
import "./CheckBox.css";

export class CheckBox extends Component {
	static defaultProps = {
		text: "default text",
	};

	render() {
		const { text, input:{checked} } = this.props;
		return (
			<label className="check-box-container">
				<input className="check-box-input" type="checkbox" {...this.props.input}/>
				<div className="check-box-wrapper" >
					{checked && <InteractiveSVGIcon icon="check" />}
				</div>
				<span className="label-wrapper-checkbox">
					<LabelForOrderForm text={text} />
				</span>
			</label>
		);
	}
}
