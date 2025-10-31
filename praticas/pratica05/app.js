var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));






module.exports = app;
