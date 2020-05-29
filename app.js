const express = require("express");
const app = express();

app.route("/").get((req,res)=>{
	res.send("hello world");
})

app.listen(8080,()=>console.log("Timestamp service is listening....."))