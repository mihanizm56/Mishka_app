const initialState = {
	email: "info@mimimishkashop.ru",
	address: {
		city: "Санкт-Петербург",
		street: "Большая Конюшенная",
		house: "19/8",
		office: "101",
	},
};

export const contacts = (state = initialState, action) => state;

// export const contacts = (state = initialState, action) => {
// 	switch (action.type) {
// 		case getContacts:
// 			return { ...state, data: action.payload };

// 		default:
// 			return state;
// 	}
// };
