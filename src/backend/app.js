const express = require("express");
const dbRouter = require("./routes/database");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.json());
app.use(bodyParser.json({ type: ["application/json", "application/fhir+json"] }));

app.use("/register", function(req, res){
    res.sendFile("register.html", {root: `${__dirname}/../../public/`});
});
app.use("/index", function(req, res){
    res.sendFile("index.html", {root: `${__dirname}/../../public/`});
});
app.use("/launch", function(req, res){
    res.sendFile("launch.html", {root: `${__dirname}/../../public/`});
});
app.use("/logs", function(req, res){
    res.sendFile("logs.html", {root: `${__dirname}/../../public/`});
});

app.use("/db", dbRouter);
console.log(__dirname);
app.use("/js", express.static(path.join(__dirname, "../../public/js")));

console.log("starting backend");
module.exports = app;