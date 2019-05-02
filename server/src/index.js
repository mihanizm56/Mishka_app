var express = require("express");
var app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");

app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/data", router);

app.listen(10000, () => {
	console.log("Server for Mishka is listening on port 10000!");
});
