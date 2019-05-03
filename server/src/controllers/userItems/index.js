const initialData = require("../../models/userCart");

module.exports.userItemsAddController = (req, res) => {
	console.log("userItemsController get item");
	// console.log(req.body);
	res.status(200);
	res.send("Success");
};

module.exports.userItemsGetController = (req, res) => {
	console.log("userItemsController get item");
	// console.log(req.body);
	res.status(200);
	res.send("Success");
};
