var express = require("express");
var routes = express.Router();

const contactsController = require("../controllers/contacts").contactsController;
const reviewsController = require("../controllers/reviews").reviewsController;
const shopItemsController = require("../controllers/shopItems").shopItemsController;
const topItemController = require("../controllers/topItem").topItemController;

routes.get("/contacts", contactsController);
routes.use("/reviews", reviewsController);
routes.use("/shopItems", shopItemsController);
routes.use("/topItem", topItemController);

module.exports = routes;
