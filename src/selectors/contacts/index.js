import { createSelector } from "reselect";

const getEmail = state => state.contacts.email;
const getCity = state => state.contacts.adress.city;
const getStreet = state => state.contacts.adress.street;
const getBlock = state => state.contacts.adress.block;
const getRoom = state => state.contacts.adress.room;

export const emailSelector = createSelector(
	getEmail,
	email => email
);

export const citySelector = createSelector(
	getCity,
	city => city
);

export const streetSelector = createSelector(
	getStreet,
	street => street
);

export const blockSelector = createSelector(
	getBlock,
	block => block
);

export const roomSelector = createSelector(
	getRoom,
	room => room
);
