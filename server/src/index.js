var express = require("express");
var app = express();
var cors = require("cors");
const router = require("./routes");

app.use(cors());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use("/data", router);

app.listen(10000, () => {
	console.log("Server for Mishka is listening on port 10000!");
});
