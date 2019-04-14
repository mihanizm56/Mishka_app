import React, { Component } from "react";
import { connect } from "react-redux";
import { BLOCK, STREET, CITY } from "../../constants";
import { adressParser } from "../../utils";
import { emailSelector, citySelector, streetSelector, blockSelector, roomSelector } from "../../store/selectors";

class WrappedContainer extends Component {
	componentDidMount(){
		var myInit = { method: 'GET', mode: 'no-cors', cache: 'default' };

		console.warn('mounted, send fetch')
		fetch('http://localhost:3001/data/reviews', myInit).then(()=>console.log('check done request'))
	}

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
		email: emailSelector(store),
		city: citySelector(store),
		street: streetSelector(store),
		block: blockSelector(store),
		room: roomSelector(store),
	};
};

export const ShopContactsProvider = connect(mapStateToProps)(WrappedContainer);
