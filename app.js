const express = require("express");
const cors = require("cors");
const app = express();
const assets = __dirname + "/public"
app.use(express.static(assets));
app.use(cors({optionSuccessStatus:200}));
app.route("/").get((req,res)=>{
	res.sendFile(__dirname+"/views/index.html");
})

//create a route for api.  Accept the date string as a parameter.
app.route("/api/timestamp/:date_string?").get((req,res)=>{
	//test if the input is a number or not
	const testDate = isNaN(req.params.date_string) ? new Date(req.params.date_string) : new Date(parseInt(req.params.date_string));
	//if the date value which has been input is not a falsy, then send back the format required, otherwise send back an error.
	testDate.valueOf() ? res.json({"unix":testDate.getTime(),"utc":testDate.toUTCString()}) : res.json({"error":"Invalid Date"})
})

app.listen(process.env.PORT()=>console.log("Timestamp service is listening....."))

