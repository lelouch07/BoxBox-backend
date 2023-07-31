"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = (0, express_1.default)();
var PORT = 3000;
// MongoDB connection string
var MONGODB_URI = 'mongodb://mongodb://localhost:27017/formula1';
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// Connect to MongoDB
mongoose_1.default
    .connect(MONGODB_URI)
    .then(function () {
    console.log('Connected to MongoDB');
    app.listen(PORT, function () {
        console.log("Server is running on http://localhost:".concat(PORT));
    });
})
    .catch(function (error) {
    console.error('Error connecting to MongoDB:', error);
});
