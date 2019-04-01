import React, { Component } from "react";
import { connect } from "react-redux";

class WrappedContainer extends Component {
	render() {
		console.log("test TopItemProvider props");
		console.log(this.props);

		const { component: WrappedComponent, topItem } = this.props;

		return <WrappedComponent topItem={topItem} />;
	}
}

const mapStateToProps = store => {
	return { topItem: store.topItem };
};

export const TopItemProvider = connect(mapStateToProps)(WrappedContainer);