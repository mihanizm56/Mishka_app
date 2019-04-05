import React, { Component } from "react";
import { connect } from "react-redux";
import { BLOCK, STREET, CITY } from "../../constants";
import { adressParser } from "../../utils";

class WrappedContainer extends Component {
	render() {
		console.log("test ShopContactsProvider props");
		console.log(this.props);

		const { component: WrappedComponent, block, room, street, city, email } = this.props;

		return (
			<WrappedComponent
				block={adressParser(BLOCK, { block, room })}
				email={email}
				street={adressParser(STREET, { street })}
				city={adressParser(CITY, { city })}
			/>
		);
	}
}

const mapStateToProps = store => {
	return {
		email: store.contacts.email,
		city: store.contacts.address.city,
		street: store.contacts.address.street,
		block: store.contacts.address.block,
		room: store.contacts.address.room,
	};
};

export const ShopContactsProvider = connect(mapStateToProps)(WrappedContainer);
