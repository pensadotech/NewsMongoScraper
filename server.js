// Modules
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const axios = require('axios')
const cheerio = require('cheerio')
var mongoose = require("mongoose");

//server variable
const app = express()
 
// express middleware: static files
app.use(express.static(path.join(__dirname, 'public')));
// express middleware: capable to handle complex json
app.use(bodyParser.urlencoded({extended: true }))
// express middleware: capable to handle simple json
app.use(bodyParser.json())
 
// Start listening - use 3000 if available or next available port
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
console.log(`Listening at http://localhost:${PORT}`)
})