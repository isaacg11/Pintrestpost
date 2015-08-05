var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
	photoURL: {
		type: String,
		required: true
	}
});

mongoose.model('Photo', photoSchema);