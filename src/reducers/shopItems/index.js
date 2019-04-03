import {getShopItems} from '../../constants';

export const initialState = [
	{
		image: "hare",
		name: "Зайчик-попрыгайчик",
		sizes: ["Рост", "вес"],
		sizeValues: ["30 см", "200 г"],
		price: 1200,
		id:1
	},
	{
		image: "basket",
		name: "Корзинка для белья",
		sizes: ["Диаметр", "высота"],
		sizeValues: ["30 см", "10 см"],
		price: 690,
		id:2
	},
	{
		image: "big-basket",
		name: "Большая корзинка для игрушек",
		sizes: ["Диаметр", "высота"],
		sizeValues: ["30 см", "30 см"],
		price: 1500,
		id:3
	},
];

export const shopItems = (state = initialState, action) => {
	switch (action.type) {
		case getShopItems:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};