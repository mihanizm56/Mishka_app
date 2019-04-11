var express = require("express");
var app = express();
// var testController = require("./controllers/index").testController;

// app.get("/", function(req, res) {
// 	res.send("Hello World!");
// });

// app.get("/test", testController);

app.listen(3001, () => {
	console.log("Example app listening on port 3001!");
});
