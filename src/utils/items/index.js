export const findTopPrice = items => {
	let result = 0;
	items.forEach(item => {
		if (item.priceOfThisItems > result) result = item.priceOfThisItems;
	});
	return result;
};
