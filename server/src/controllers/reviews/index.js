const initialData = require('../../models/reviews')

module.exports.reviewsController = (req, res) => {
	console.log("reviewsController send data");
	res.status(200);
	res.json(initialData);
};
