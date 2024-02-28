const express = require("express");
const bodyParser = require("body-parser");
const mongose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongose.connect("mongodb+srv://grupooperativo84:QVsgqSH75aHJyNmi@vitalia.qaqiuht.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to mongodb")
}).catch((error) =>{
    console.log("Error Connecting to MongoDB")
});

app.listen(port, ()=>{
    console.log("Server is running on port 3000")
})