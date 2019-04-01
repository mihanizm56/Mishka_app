import React, { Component } from "react";
import {OrderFormProvider} from '../../../../containers';
import {BigForm} from '../../BigForm';

export class OrderPage extends Component {
	render() {
		return (
			<div className="order-page-wrapper">
				<OrderFormProvider component={BigForm} />
			</div>
		);
	}
}
