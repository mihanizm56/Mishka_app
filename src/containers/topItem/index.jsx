import React, { Component } from "react";
import { connect } from "react-redux";

class WrappedContainer extends Component {
	render() {
		console.log("test TopItemProvider props");
		console.log(this.props);

		const { component: WrappedComponent, ...restProps } = this.props;

		return <WrappedComponent {...restProps} />;
	}
}

const mapStateToProps = store => {
	return {
		itemName: store.topItem.name,
		description: store.topItem.description,
		color: store.topItem.color,
		diameter: store.topItem.diameter,
		height: store.topItem.height,
		price: store.topItem.price,
		image: store.topItem.image,
	};
};

export const TopItemProvider = connect(mapStateToProps)(WrappedContainer);
