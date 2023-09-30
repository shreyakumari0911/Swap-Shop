var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('');
var db = mongoose.connection;
db.on('error',console.log.bind)