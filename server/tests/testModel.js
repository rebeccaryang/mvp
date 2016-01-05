var mongoose = require('mongoose');

var adTest = mongoose.Schema({
	headline_1 : String,
	desc1_1: String,
	desc2_1: String,
	display_1: String,
	headline_2: String,
	desc1_2: String,
	desc2_2: String,
	display_2: String,
	clicks_1: {type: Number, default:0},
	impressions_1: {type: Number, default:0},
	clicks_2: {type: Number, default:0},
	impressions_2: {type:Number, default:0}
});

var Test = mongoose.model('Test', adTest);

module.exports = Test;

