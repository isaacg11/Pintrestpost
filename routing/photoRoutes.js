var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var Photo = mongoose.model('Photo');
//--------------------------------------------------------------------------------------------------------------------//
router.get("/", function(req, res) {
	Photo.find(function(err, photos) {
		if(err) return next(err);
		res.send(photos);
	});
});
//----------------------------------------------------------------------------------------------------------------------//
router.post('/addPhoto', function(req, res, next){ 
	var photo = new Photo(req.body);
	photo.save(function(err, photo) {
		if(err) return next(err);
		res.send(photo);
	});
});

router.use(function(err, req, res, next) {
	res.status(400).send(err);
});
module.exports = router;