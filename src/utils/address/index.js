// @flow

import { BLOCK, STREET, CITY } from "../../constants";

export const adressParser = (parameter, objectWithValues = {}) => {
	const { block, street, city, room } = objectWithValues;

	if (parameter === BLOCK && block && room) {
		return `д. ${block} офис ${room}`;
	}

	if (parameter === STREET && street) {
		return `ул. ${street}`;
	}

	if (parameter === CITY && city) {
		return `г. ${city}`;
	}
};
