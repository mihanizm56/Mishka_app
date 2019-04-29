import { createSelector } from "reselect";

const getEmail = state => state.contactsReducer.email;
const getCity = state => state.contactsReducer.address.city;
const getStreet = state => state.contactsReducer.address.street;
const getBlock = state => state.contactsReducer.address.block;
const getRoom = state => state.contactsReducer.address.room;

export const emailSelector = createSelector(
	[getEmail],
	email => email
);

export const citySelector = createSelector(
	[getCity],
	city => city
);

export const streetSelector = createSelector(
	[getStreet],
	street => street
);

export const blockSelector = createSelector(
	[getBlock],
	block => block
);

export const roomSelector = createSelector(
	[getRoom],
	room => room
);
