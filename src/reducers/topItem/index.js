const initialState = {
	name: "Вязаные корзинки",
	description: "Экологически чистая пряжа, ручная работа. Доступны в шести расцветках, и трех размерах.",
	price: "990 руб.",
	image: "index-basket",
	characteristics: [
		{
			name: "Цвет",
			value: "«Тиффани»/серый",
		},
		{
			name: "Диаметр",
			value: "25 см",
		},
		{
			name: "Высота",
			value: "15 см",
		},
	],
};

export const topItem = (state = initialState, action) => state;

// export const contacts = (state = initialState, action) => {
// 	switch (action.type) {
// 		case getContacts:
// 			return { ...state, topItemData: action.payload };

// 		default:
// 			return state;
// 	}
// };
