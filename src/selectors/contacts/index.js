import { createSelector } from "reselect";

const getEmail = state => state.contacts.email;
const getCity = state => state.contacts.address.city;
const getStreet = state => state.contacts.address.street;
const getBlock = state => state.contacts.address.block;
const getRoom = state => state.contacts.address.room;

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
