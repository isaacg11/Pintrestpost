var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //this line is importing mongoose.
var passport = require('passport'); //this line is importing passport.
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
require('./models/Users');
require('./config/passport');
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
mongoose.connect('mongodb://localhost/pinterest'); //this line defines the collection name being sent to mongodb and creates the connection to the server.
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var userRoutes = require('./routing/userRoutes');
var photoRoutes = require("./routing/photoRoutes.js");

var app = express();
var port = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

app.use("/api/Users", userRoutes);
app.use("/api", photoRoutes);

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});