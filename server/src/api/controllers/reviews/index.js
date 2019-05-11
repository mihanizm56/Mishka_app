const initialData = require("../../models/reviews");
// const getSuccessMessage = require("../../../utils").getSuccessMessage;
const reviews = initialData.reviews;

const getSuccessMessage = reviews => ({ reviews, message: "success" });

module.exports.reviewsController = (req, res) => {
	console.log("reviewsController send data");
	res.status(200);
	res.json(initialData);
};

module.exports.reviewsAddController = (req, res) => {
	const bodyData = req.body;
	console.log("get data in reviewsAddController", bodyData);
	const newReview = bodyData;

	if (newReview) {
		const checkForNewReview = reviews
			.filter(item => item.login === newReview.login)
			.filter(item => item.text === item.text)
			.filter(item => item.user === item.user);

		if (!checkForNewReview.length) {
			reviews.push(newReview);

			console.log("reviewsController added item");
			console.log(bodyData);
		}

		console.log("not a new review");

		res.status(200);
		res.json(getSuccessMessage(reviews));
	} else {
		res.status(400);
		res.send({ error: { message: "bad request" } });
	}
};
