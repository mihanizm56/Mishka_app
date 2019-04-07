import React, { Component } from "react";
import { connect } from "react-redux";
import {
	topItemNameSelector,
	topItemDescriptionSelector,
	topItemPriceSelector,
	topItemImageSelector,
	topItemCharacteristicsSelector,
} from "../../store/selectors";

class WrappedContainer extends Component {
	render() {
		// console.log("test TopItemProvider props");
		// console.log(this.props);

		const { component: WrappedComponent, ...restProps } = this.props;

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

export const TopItemProvider = connect(mapStateToProps)(WrappedContainer);
