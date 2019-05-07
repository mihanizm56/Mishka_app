import React, { Component } from "react";
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";
import {
	topItemNameSelector,
	topItemDescriptionSelector,
	topItemPriceSelector,
	topItemImageSelector,
	topItemCharacteristicsSelector,
	fetchTopItemAction,
} from "../../redux/modules/topItem";

const TOP_ITEM_EMPTY_PROPS = {
	itemName: "",
	description: "",
	price: "",
	image: "",
	characteristics: [
		{
			name: "",
			value: "",
		},
		{
			name: "",
			value: "",
		},
		{
			name: "",
			value: "",
		},
	],
};

class WrappedContainer extends Component {
	static getDerivedStateFromProps(nextProps) {
		const { itemName, description, characteristics, price, image } = nextProps;

		const TopItemProps = {
			itemName,
			description,
			characteristics,
			price,
			image,
		};

		if (isEqual(TopItemProps, TOP_ITEM_EMPTY_PROPS)) {
			return { isEmptyProps: true };
		}

		return { isEmptyProps: false };
	}

	state = {
		isEmptyProps: false,
	};

	componentDidMount() {
		this.props.fetchTopItem();
	}

	componentDidUpdate() {
		// console.log("TopItemProvider updated", this.props);
	}

	render() {
		const { isEmptyProps } = this.state;
		const { component: WrappedComponent, fetchTopItem, ...restProps } = this.props;

		return !isEmptyProps && <WrappedComponent {...restProps} />;
	}
}

const mapStateToProps = store => {
	return {
		itemName: topItemNameSelector(store),
		description: topItemDescriptionSelector(store),
		characteristics: topItemCharacteristicsSelector(store),
		price: topItemPriceSelector(store),
		image: topItemImageSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchTopItem() {
			dispatch(fetchTopItemAction());
		},
	};
};

export const TopItemProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
