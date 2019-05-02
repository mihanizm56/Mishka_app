const express = require("express");
const routes = express.Router();

const contactsController = require("../controllers/contacts").contactsController;
const reviewsController = require("../controllers/reviews").reviewsController;
const shopItemsController = require("../controllers/shopItems").shopItemsController;
const topItemController = require("../controllers/topItem").topItemController;
const userItemsController = require("../controllers/userItems").userItemsController;

///contacts
routes.get("/contacts", contactsController);

///reviews
routes.get("/reviews", reviewsController);
// routes.post("/reviews", reviewsController);

///shopItems
routes.get("/shopItems", shopItemsController);
// routes.post("/shopItems", shopItemsController);

///topItem
routes.get("/topItem", topItemController);
// routes.post("/topItem", topItemController);

///userItems
routes.post("/userItems", userItemsController);
// routes.post("/topItem", topItemController);

module.exports = routes;
