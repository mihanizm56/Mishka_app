const initialData = require('../../models/shopItems')

module.exports.shopItemsController = (req, res) => {
	console.log("shopItemsController send data");
	res.status(200);
	res.json(initialData);
};
