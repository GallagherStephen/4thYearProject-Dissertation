const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://Username:<Password>@cluster0.7i0oy.mongodb.net/<Student>?retryWrites=true&w=majority";

// Connecting to the MongoDB
mongoose.connect(mongoDB,{useNewUrlParser:true});

// Cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse Application/Json
app.use(bodyParser.json())

// Database Schemas
const Schema = mongoose.Schema;