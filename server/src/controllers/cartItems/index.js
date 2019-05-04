let cartItems = require("../../models/userCart");
const shopItems = require("../../models/shopItems").items;

const getSuccessMessage = id => ({ id, message: "success" });
const getIncrementedNumberOfItems = item => (item ? item.numberOfItems + 1 : 1);
const getDecrementedNumberOfItems = item => (item ? item.numberOfItems + 1 : 1);

module.exports.cartItemsAddController = (req, res) => {
	const bodyData = req.body;

	console.log("userItemsController add item");
	console.log(bodyData);

	const itemId = bodyData.id;
	const itemFullData = shopItems.filter(item => item.id === itemId)[0];
	if (itemFullData) {
		cartItems = {
			...cartItems,
			[itemId]: {
				...itemFullData,
				numberOfItems: getIncrementedNumberOfItems(cartItems[itemId]),
			},
		};

		res.status(200);
		res.json(getSuccessMessage(itemId));
	} else {
		res.status(400);
		res.send("not found");
	}
};

module.exports.cartItemsGetController = (req, res) => {
	console.log("userItemsController send items from cart");
	// console.log(req.body);
	res.status(200);
	res.json(cartItems);
};
