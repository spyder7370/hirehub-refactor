const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
	name: String,
	user: String,
	position: String,
	phone: String,
	email: String,
	website: String,
	objective: String,
	skills: String,
	education: [
		{
			level: String,
			major: String,
			result: String,
			start: Date,
			end: Date,
			institute: String
		}
	],
	experience: [
		{
			position: String,
			company: String,
			responsibility: String,
			start: Date,
			end: Date
		}
	],
	projects: [
		{
			name: String,
			link: String,
			stack: String,
			description: String
		}
	]
});

module.exports = mongoose.model('resume', resumeSchema);
