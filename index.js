const express = require("express");
const app = express();
app.use("/",(req,res) => {
	res.json({message:"hello from Express app"})
})
app.listen(8000,() => {
	console.log("i am running")
})