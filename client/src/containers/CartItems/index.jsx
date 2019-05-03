import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchShopItemsAction, shopItemsSelector } from "../../redux/modules/shopItems";
import { searchStateSelector } from "../../redux/modules/itemsFilters";
import { getFilteredShopItems } from "../../utils";
import {
	addItemToCartAction,
	userCartStateSelector,
	userCartSumOfItemsSelector,
	userCartSumValueSelector,
	fetchUserCartAction,
} from "../../redux/modules/userItems";

class WrappedContainer extends Component {
	state = {
		actualShopItems: this.props.shopItems,
	};

	componentDidMount() {
		// console.log('check CartItemsProvider props',this.props)
		// this.props.fetchUserCartAction()
	}

	addItemToResultBasket = id => {
		// console.log("added item id", id);
		// addItemToCart(id)
	};

	render = () => {
		const { children, fetchUserCart, addItemToCart, ...restProps } = this.props;
		return React.Children.map(children, child =>
			React.cloneElement(child, { ...restProps, addItemToCart: this.addItemToResultBasket })
		);
	};
}

const mapStateToProps = store => {
	return {
		// userCartState: userCartStateSelector(store),
		// userCartSumOfItems: userCartSumOfItemsSelector(store),
		// userCartSumValue: userCartSumValueSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchUserCart() {
			dispatch(fetchUserCartAction());
		},
		addItemToCart(id) {
			dispatch(addItemToCartAction(id));
		},
		// deleteItemFromCard(id) {
		// 	dispatch(deleteItemFromCardAction(id));
		// },
	};
};

export const CartItemsProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
