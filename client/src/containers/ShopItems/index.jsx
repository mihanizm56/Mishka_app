import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchShopItemsAction,
	shopItemsSelector,
	addItemToCartAction,
	cartItemsSelector,
} from "../../redux/modules/shopItems";
import { searchStateSelector } from "../../redux/modules/itemsFilters";
import { getFilteredShopItems } from "../../utils";
import { loginStateSelector } from "../../redux/modules/loginReducer";

class WrappedContainer extends Component {
	state = {
		actualShopItems: this.props.shopItems,
	};

	componentDidMount() {
		this.props.fetchShopItems();
	}

	componentDidUpdate() {
		console.log("test ShopItemsProvider props", this.props);
	}

	getFilteredItems = string => getFilteredShopItems(this.props.shopItems, string);

	addItemToResultBasket = id => {
		const { shopItems, addItemToCart } = this.props;
		console.log("added item id", id);
		const itemFromBasket = shopItems.filter(item => item.id === id)[0];
		if (itemFromBasket) {
			console.log("есть такой товар, добавляю в корзину");
			addItemToCart(itemFromBasket);
		} else {
			console.log("нет такого товара");
		}
	};

	render() {
		const { actualShopItems } = this.state;
		const { component: WrappedComponent, fetchShopItemsAction, shopItems, searchState, ...restProps } = this.props;

		return (
			<WrappedComponent
				{...restProps}
				shopItems={this.getFilteredItems(searchState)}
				addItemToResultBasket={this.addItemToResultBasket}
			/>
		);
	}
}

const mapStateToProps = store => {
	return {
		shopItems: shopItemsSelector(store),
		searchState: searchStateSelector(store),
		itemsInCart: cartItemsSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchShopItems() {
			dispatch(fetchShopItemsAction());
		},
		addItemToCart(id) {
			dispatch(addItemToCartAction(id));
		},
	};
};

export const ShopItemsProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
