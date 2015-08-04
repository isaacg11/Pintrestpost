var express = require("express");
var router = express.Router();
var photos =[];
//----------------------------------------------------------------------------------------------------------------------//
router.get("/", function(req, res) {
	res.send(photos);
	console.log(photos);
});
//----------------------------------------------------------------------------------------------------------------------//
router.post('/addPhoto', function(req, res){
	console.log(req);
	photos.push(req.body);
	res.send(photos);
});
module.exports = router;