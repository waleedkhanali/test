const express = require("express");
const app = express();
app.use("/",(req,res) => {
	res.send("hello from waleed khan")
})
app.listen(8000,() => {
	console.log("i am running")
})
