const express = require("express");
const app = express();
app.use("/",(req,res) => {
	res.render("hello from waleed khan")
})
app.listen(8000,() => {
	console.log("i am running")
})