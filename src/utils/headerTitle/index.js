//
export const getHeaderTitle = (nameOfPage: string) => {
	switch (nameOfPage) {
		case "order-page":
			return "Вязание на заказ";
		case "catalog-page":
			return "Каталог товаров";

		default:
			return "default title";
	}
};
