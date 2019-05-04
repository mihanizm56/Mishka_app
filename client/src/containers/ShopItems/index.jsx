import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchShopItemsAction,
	shopItemsSelector,
	cartItemsSelector,
	fetchAddItemInBasketAction,
	fetchCartItemsAction,
	getNumberOfItemsInCartSelector,
} from "../../redux/modules/shopItems";
import { searchStateSelector } from "../../redux/modules/itemsFilters";
import { getFilteredShopItems } from "../../utils";
import { loginStateSelector } from "../../redux/modules/loginReducer";

class WrappedContainer extends Component {
	state = {
		actualShopItems: this.props.shopItems,
	};

	componentDidMount() {
		const { fetchShopItems, fetchCartItems } = this.props;
		fetchShopItems();
		fetchCartItems();
	}

	componentDidUpdate() {
		console.log("test ShopItemsProvider props", this.props);
	}

	getFilteredItems = string => getFilteredShopItems(this.props.shopItems, string);

	addItemToResultBasket = id => {
		const { shopItems, addItemToCart, loginState } = this.props;
		console.log("added item id", id);
		const itemFromBasket = shopItems.filter(item => item.id === id)[0];
		if (itemFromBasket && loginState) {
			console.log("есть такой товар, добавляю в корзину");
			addItemToCart(itemFromBasket);
		} else {
			console.log("нет такого товара или не авторизован");
		}
	};

	render = () => {
		const { children, fetchShopItemsAction, shopItems, searchState, ...restProps } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				shopItems: this.getFilteredItems(searchState),
				addItemToResultBasket: this.addItemToResultBasket,
				...restProps,
			})
		);
	};
}

const mapStateToProps = store => {
	return {
		shopItems: shopItemsSelector(store),
		searchState: searchStateSelector(store),
		itemsInCart: cartItemsSelector(store),
		numberOfItemsInCart: getNumberOfItemsInCartSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchShopItems() {
			dispatch(fetchShopItemsAction());
		},
		addItemToCart(data) {
			dispatch(fetchAddItemInBasketAction(data));
		},
		fetchCartItems() {
			dispatch(fetchCartItemsAction());
		},
	};
};

export const ShopItemsProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
