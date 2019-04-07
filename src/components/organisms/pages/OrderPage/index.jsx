import React, { PureComponent } from "react";
import { OrderFormProvider } from "../../../../containers";
import { BigForm } from "../../FormComponents";

export class OrderPage extends PureComponent {
	render() {
		return (
			<div className="order-page-wrapper">
				<OrderFormProvider component={BigForm} />
			</div>
		);
	}
}
