var express = require("express");
var app = express();
const router = require("./routes");

app.use("/data", router);

app.listen(3001, () => {
	console.log("Server for Mishka is listening on port 3001!");
});
