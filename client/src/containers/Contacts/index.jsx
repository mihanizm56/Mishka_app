import React, { Component } from "react";
import { connect } from "react-redux";
import { BLOCK, STREET, CITY } from "../../constants";
import { adressParser } from "../../utils";
import { emailSelector, citySelector, streetSelector, blockSelector, roomSelector } from "../../store/selectors";

class WrappedContainer extends Component {
	state = {
		data: null,
	};

	componentDidMount() {
		var myInit = { mode: "cors" };

		console.log("mounted, send fetch");
		fetch("http://localhost:10000/data/contacts", myInit)
			.then(data => data.json())
			.then(data => console.log(data));
	}

	setData = data => {
		console.log(data);
		this.setState({ data });
	};

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

export const ShopContactsProvider = connect(mapStateToProps)(WrappedContainer);
