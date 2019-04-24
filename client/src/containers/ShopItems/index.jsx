import React, { Component } from "react";
import { connect } from "react-redux";
import { shopItemsSelector, searchStateSelector } from "../../store/selectors";
import { fetchShopItemsAction } from "../../actions";

class WrappedContainer extends Component {
	componentDidMount() {
		this.props.fetchShopItems();
	}

	render() {
		// console.log("test ShopItemsProvider props", this.props);

		const { component: WrappedComponent, fetchShopItemsAction, ...restProps } = this.props;

		return <WrappedComponent {...restProps} />;
	}
}

const mapStateToProps = store => {
	return { shopItems: shopItemsSelector(store), searchState: searchStateSelector(store) };
};

const mapDispatchToProps = dispatch => {
	return {
		fetchShopItems() {
			dispatch(fetchShopItemsAction());
		},
	};
};

export const ShopItemsProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
