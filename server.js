var express = require('express');
var app = express();
var path = require('path')

// Static Content
app.use(express.static(path.join(__dirname, "build")));

// ***********************************************************************
// Start the Express Server
// ***********************************************************************

// Pull the port from starphleet OR fallback to 3000
var serverPort = process.env.PORT || 3000;
// Start your engines...
var server = app.listen(process.env.PORT || 3000);

console.log("Express Started on port: ", process.env.PORT || 3000);
