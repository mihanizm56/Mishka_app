const initialData = require('../../models/topItem')

module.exports.topItemController = (req, res) => {
	console.log("topItemController send data");
	res.status(200);
	res.json(initialData);
};
