const initialData = {
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

module.exports.topItemController = (req, res) => {
	console.log("topItemController send data");
	res.status(200);
	res.json(initialData);
};
