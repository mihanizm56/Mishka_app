import React, { Component } from "react";
import { connect } from "react-redux";

class WrappedContainer extends Component {
	render() {
		console.log("test ShopItemsProvider props");
		console.log(this.props);

		const { component: WrappedComponent, shopItems } = this.props;

		return <WrappedComponent shopItems={shopItems} />;
	}
}

const mapStateToProps = store => {
	return { shopItems: store.shopItems };
};

export const ShopItemsProvider = connect(mapStateToProps)(WrappedContainer);
