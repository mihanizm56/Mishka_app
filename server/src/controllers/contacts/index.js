const initialData = require('../../models/contacts')

module.exports.contactsController = (req, res) => {
	console.log("contactsController send data");
	res.status(200);
	res.json(initialData);
};
