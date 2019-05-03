const initialData = require("../../models/userCart");

const getSuccessMessage = id => ({ id, message: "success" });

module.exports.cartItemsAddController = (req, res) => {
	console.log("userItemsController get item");
	// console.log(req.body);
	res.status(200);
	res.json(getSuccessMessage(req.body.id));
};

module.exports.cartItemsGetController = (req, res) => {
	console.log("userItemsController get item");
	// console.log(req.body);
	res.status(200);
	res.send("Success");
};
