var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var Photo = mongoose.model('Photo');
//--------------------------------------------------------------------------------------------------------------------//
router.param('photo', function(req, res, next, id) {
	Photo.findOne({_id: id}).exec(function(err, photo) {
		if(err) return next(err);
		req.photo = photo;
		next();
	});
});
//--------------------------------------------------------------------------------------------------------------------//
router.post('/deletePhoto/:photo', function(req, res, next) {
	console.log(req.photo);
	Photo.update({_id : req.photo._id}, {dateDeleted: new Date()}, function(err) {
		if(err) return next(err);
		else res.send("Photo deleted");
	});
});

//----------------------------------------------------------------------------------------------------------------------//
router.get('/', function(req, res, next) {
	var query = Photo.find({dateDeleted:null});
	query.exec(function(err, photos) {
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