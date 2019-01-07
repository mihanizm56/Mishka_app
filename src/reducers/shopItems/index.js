export const shopItemsToSell = [
	{
		image: "",
		name: "Зайчик-попрыгайчик",
		sizes: ["Рост", "вес"],
		sizeValues: ["30 см", "200 г"],
		priceOfThisItems: 1200,
	},
	{
		image: "",
		name: "Корзинка для белья",
		sizes: ["Диаметр", "высота"],
		sizeValues: ["30 см", "10 см"],
		priceOfThisItems: 690,
	},
	{
		image: "",
		name: "Большая корзинка для игрушек",
		sizes: ["Диаметр", "высота"],
		sizeValues: ["30 см", "30 см"],
		priceOfThisItems: 1500,
	},
];

export const shopItems = (state = shopItemsToSell, action) => state;
