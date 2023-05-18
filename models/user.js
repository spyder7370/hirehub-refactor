const mongoose = require('mongoose'),
	passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},

	lastName: {
		type: String,
		required: true
	},

	username: {
		type: String,
		required: true
	},

	branch: {
		type: String,
		required: true
	},

	university: {
		type: String
	},

	cgpa: {
		type: Number,
		required: true
	},

	graduationYear: {
		type: Number,
		required: true
	},

	mobile_number: {
		type: String,
		sparse: true,
		default: 'Please provide a phone number'
	},

	isSelected: {
		type: Boolean,
		default: false
	},

	resume_link: {
		type: String,
		sparse: true,
		default: 'Please provide an external resume link'
	},

	isAdmin: {
		type: Boolean,
		default: false
	},

	avatar: {
		type: String,
		default: '/images/user_default.png'
	},

	resume: String,

	appliedJobs: [
		{
			type: mongoose.Schema.Types.ObjectID,
			ref: 'Job'
		}
	]
});

userSchema.plugin(passportLocalMongoose);
module.exports = new mongoose.model('User', userSchema);
