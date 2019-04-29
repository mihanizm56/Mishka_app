import { createSelector } from "reselect";

const getTopItemName = state => state.topItemReducer.name;
const getTopItemDescription = state => state.topItemReducer.description;
const getTopItemPrice = state => state.topItemReducer.price;
const getTopItemImage = state => state.topItemReducer.image;
const getTopItemCharacteristics = state => state.topItemReducer.characteristics;

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
