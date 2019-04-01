import React, { Component } from "react";
import { connect } from "react-redux";

class WrappedContainer extends Component {
	render() {
		console.log("test ShopContactsProvider props");
		console.log(this.props);

		const { component: WrappedComponent, contacts } = this.props;

		return <WrappedComponent contacts={contacts} />;
	}
}

const mapStateToProps = store => {
	return { contacts: store.contacts };
};

export const ShopContactsProvider = connect(mapStateToProps)(WrappedContainer);
