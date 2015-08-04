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
	photos.push(req.body); //this line says to push the request body object into the array "photos".
	res.send(photos); //this line says to send the 'photos' array into the
});
module.exports = router;