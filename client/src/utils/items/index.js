import { FILTER_ITEM_FIELD } from '../../constants'

export const findTopPrice = items => {
	let result = 0;
	items.forEach(item => {
		if (item.priceOfThisItems > result) result = item.priceOfThisItems;
	});
	return result;
};

export const isMatching = (full, chunk) => full && chunk ? full.toUpperCase().indexOf(chunk.toUpperCase()) > -1 : false

export const search = (array, field, filterString) => array.filter(item => isMatching(item[field], filterString))

export const getFilteredShopItems = (initialItems, filterString) => filterString && initialItems.length ? search(initialItems, FILTER_ITEM_FIELD, filterString) : initialItems;

export const isDividedByThree = number => (number % 3)