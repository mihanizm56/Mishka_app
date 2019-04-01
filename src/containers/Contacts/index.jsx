import React, { Component } from "react";
import { connect } from "react-redux";
import { block as blockConstant, street as streetConstant, city as cityConstant } from "../../constants";
import { adressParser } from "../../utils";

class WrappedContainer extends Component {
	render() {
		console.log("test ShopContactsProvider props");
		console.log(this.props);

		const { component: WrappedComponent, block, room, street, city, email } = this.props;

		return (
			<WrappedComponent
				block={adressParser(blockConstant, { block, room })}
				email={email}
				street={adressParser(streetConstant, { street })}
				city={adressParser(cityConstant, { city })}
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
