var express = require("express");
var app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const staticRouter = require("./server/routes");
const apiRouter = require("./api/routes");

app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRouter);
app.use("/static", staticRouter);

app.listen(10000, () => {
	console.log("Server for Mishka is listening on port 10000!");
});
