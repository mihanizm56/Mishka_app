var express = require("express");
var app = express();
const router = require("./routes");

app.use("/data", router);

app.listen(3001, () => {
	console.log("Example app listening on port 3001!");
});
