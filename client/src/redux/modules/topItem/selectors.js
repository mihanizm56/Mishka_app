import { createSelector } from "reselect";

const getTopItemName = state => state.topItem.name;
const getTopItemDescription = state => state.topItem.description;
const getTopItemPrice = state => state.topItem.price;
const getTopItemImage = state => state.topItem.image;
const getTopItemCharacteristics = state => state.topItem.characteristics;

export const topItemNameSelector = createSelector(
	[getTopItemName],
	name => name
);

export const topItemDescriptionSelector = createSelector(
	[getTopItemDescription],
	description => description
);

export const topItemPriceSelector = createSelector(
	[getTopItemPrice],
	price => price
);

export const topItemImageSelector = createSelector(
	[getTopItemImage],
	image => image
);

export const topItemCharacteristicsSelector = createSelector(
	[getTopItemCharacteristics],
	characteristics => characteristics
);
