import React, { PureComponent } from "react";
import { InteractiveSVGIcon, LabelForOrderForm } from "../../../../components";
import "./CheckBox.css";

export class CheckBox extends PureComponent {
	static defaultProps = {
		text: "default text",
	};

	render() {
		const {
			text,
			input: { checked },
		} = this.props;
		return (
			<label className="check-box-container">
				<input className="check-box-input" type="checkbox" {...this.props.input} />
				<div className="check-box-wrapper">{checked && <InteractiveSVGIcon icon="check" noOpacityChange />}</div>
				<span className="label-wrapper-checkbox">
					<LabelForOrderForm text={text} />
				</span>
			</label>
		);
	}
}
