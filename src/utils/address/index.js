// @flow

import { block as blockConstant, street as streetConstant, city as cityConstant } from "../../constants";

export const adressParser = (parameter, objectWithValues = {}) => {
	const { block, street, city, room } = objectWithValues;

	if (parameter === blockConstant && block && room) {
		return `д. ${block} офис ${room}`;
	}

	if (parameter === streetConstant && street) {
		return `ул. ${street}`;
	}

	if (parameter === cityConstant && city) {
		return `г. ${city}`;
	}
};
