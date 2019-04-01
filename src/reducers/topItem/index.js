const initialState = {
	name: "Вязаные корзинки",
	description: "Экологически чистая пряжа, ручная работа. Доступны в шести расцветках, и трех размерах.",
	color: "«Тиффани»/серый",
	diameter: "25 см",
	height: "15 см",
	price: "990 руб.",
	image: "baskets-image",
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
