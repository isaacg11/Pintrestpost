var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
	photoURL: {
		type: String,
		required: true
	},
	dateDeleted: {
		type: Date,
		default: null
	}
});

mongoose.model('Photo', photoSchema);