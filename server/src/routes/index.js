var app = require("../models").app;

const contactsController = require("./controllers/contacts").contactsController;
const reviewsController = require("./controllers/reviews").reviewsController;
const shopItemsController = require("./controllers/shopItems").shopItemsController;
const topItemController = require("./controllers/topItem").topItemController;

app.use("/contacts", contactsController);
app.use("/reviews", reviewsController);
app.use("/shopItems", shopItemsController);
app.use("/topItem", topItemController);
