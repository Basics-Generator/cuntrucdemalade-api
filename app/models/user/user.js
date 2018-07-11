var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username				: 	String,
	password				: 	String,
	lastname	 			: 	String,
	firstname	 			: 	String,
	email		 			: 	String,
	phone 					:	String,
	country 				: 	String,
	city 					:	String,
	postalCode				: 	String,
	adress					: 	String,
	birthday				: 	Date,
	description				: 	String,
	refreshToken			: 	String,
	photo		 			: 	String,
	photoThumb				: 	String,
	createdAt				: 	Date,
	updateAt				: 	Date,
	enabled					: 	Boolean,
	sessionAuth 			: { type: mongoose.Schema.Types.ObjectId, ref: 'sessionAuth' },
	sessionChangePassword 	: { type: mongoose.Schema.Types.ObjectId, ref: 'sessionChangePassword' }
});

module.exports = mongoose.model('User', userSchema);