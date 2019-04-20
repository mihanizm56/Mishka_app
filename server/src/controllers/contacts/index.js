const initialData = {
	email: "info@mimimishkashop.ru",
	address: {
		city: "Санкт-Петербург",
		street: "Большая Конюшенная",
		block: "19/8",
		room: "101",
	},
};

module.exports.contactsController = (req, res) => {
	console.log("contactsController send data");
	res.status(200);
	res.json(initialData);
};
