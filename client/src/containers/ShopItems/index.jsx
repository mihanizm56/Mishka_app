import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchShopItemsAction, shopItemsSelector } from "../../redux/modules/shopItems";
import { searchStateSelector } from "../../redux/modules/itemsFilters";
import { getFilteredShopItems } from "../../utils";
import { addItemToCardAction } from "../../redux/modules/userItems";

class WrappedContainer extends Component {
	state = {
		actualShopItems: this.props.shopItems,
	};

	componentDidMount() {
		this.props.fetchShopItems();
	}

	getFilteredItems = string => getFilteredShopItems(this.props.shopItems, string);

	addItemToResultBasket = id => {
		const fullItemData = this.props.shopItems.filter(item => item.id === id)[0];
		console.log("fullItemData", fullItemData);
	};

	render() {
		const { actualShopItems } = this.state;
		console.log("test ShopItemsProvider props", this.props);

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
	return { shopItems: shopItemsSelector(store), searchState: searchStateSelector(store) };
};

const mapDispatchToProps = dispatch => {
	return {
		fetchShopItems() {
			dispatch(fetchShopItemsAction());
		},
		addItemToCard(itemData) {
			dispatch(addItemToCardAction(itemData));
		},
	};
};

export const ShopItemsProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
