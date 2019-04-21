import React, { Component } from "react";
import { connect } from "react-redux";
import { shopItemsSelector, searchStateSelector } from "../../store/selectors";

class WrappedContainer extends Component {
	render() {
		// console.log("test ShopItemsProvider props", this.props);

		const { component: WrappedComponent, ...restProps } = this.props;

		return <WrappedComponent {...restProps} />;
	}
}

const mapStateToProps = store => {
	return { shopItems: shopItemsSelector(store), searchState: searchStateSelector(store) };
};

export const ShopItemsProvider = connect(mapStateToProps)(WrappedContainer);
