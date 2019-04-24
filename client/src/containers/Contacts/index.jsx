import React, { Component } from "react";
import { connect } from "react-redux";
import { BLOCK, STREET, CITY } from "../../constants";
import { fetchContactsAction } from "../../actions";
import { adressParser } from "../../utils";
import { emailSelector, citySelector, streetSelector, blockSelector, roomSelector } from "../../store/selectors";

class WrappedContainer extends Component {
	componentDidMount() {
		this.props.fetchContacts();
	}

	render() {
		// console.log("test ShopContactsProvider props");
		// console.log(this.props);

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
		email: emailSelector(store),
		city: citySelector(store),
		street: streetSelector(store),
		block: blockSelector(store),
		room: roomSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchContacts() {
			dispatch(fetchContactsAction());
		},
	};
};

export const ShopContactsProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
