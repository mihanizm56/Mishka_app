import React, { Component } from "react";
import { connect } from "react-redux";
import {
	topItemNameSelector,
	topItemDescriptionSelector,
	topItemPriceSelector,
	topItemImageSelector,
	topItemCharacteristicsSelector,
} from "../../redux/modules";
import { fetchTopItemAction } from "../../redux/modules";

class WrappedContainer extends Component {
	componentDidMount() {
		this.props.fetchTopItem();
	}

	componentDidUpdate() {
		console.log("TopItemProvider updated", this.props);
	}

	render() {
		const { component: WrappedComponent, fetchTopItem, ...restProps } = this.props;

		return <WrappedComponent {...restProps} />;
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
