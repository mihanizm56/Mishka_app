import { FILTER_ITEM_FIELD } from "../../constants";

export const findTopPrice = items => {
	let result = 0;
	items.forEach(item => {
		if (item.priceOfThisItems > result) result = item.priceOfThisItems;
	});
	return result;
};

export const isMatching = (full, chunk) =>
	full && chunk ? full.toUpperCase().indexOf(chunk.toUpperCase()) > -1 : false;

export const search = (array, field, filterString) => array.filter(item => isMatching(item[field], filterString));

export const getFilteredShopItems = (initialItems, filterString) =>
	filterString && initialItems.length ? search(initialItems, FILTER_ITEM_FIELD, filterString) : initialItems;

export const isDividedByThree = number => number % 3;

export const getNormalizedEndingOfItems = value => {
	if (!value) {
		return "ов";
	}

	let effectiveNumber = 0;
	if (typeof value === "string") {
		effectiveNumber = +value[value.length - 1];
	}

	if (typeof value === "number") {
		value = value.toString();
		effectiveNumber = +value[value.length - 1];
	}

	if ((effectiveNumber >= 5 && effectiveNumber <= 10) || effectiveNumber === 0) {
		return "ов";
	}

	if (effectiveNumber >= 2 && effectiveNumber <= 4) {
		return "а";
	}

	if (effectiveNumber === 1) {
		return "";
	}

	return null;
};
