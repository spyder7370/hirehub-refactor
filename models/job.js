var mongoose = require('mongoose');
var jobSchema = new mongoose.Schema({
	jobName: {
		type: String,
		default: 'blank job'
	},

	companyName: {
		type: String,
		default: 'blank company'
	},

	logo: {
		type: String,
		default: 'not given'
	},

	status: {
		type: String,
		default: 'Active'
	},

	eligibility: {
		type: String,
		default: 'not given'
	},

	description: {
		type: String,
		default: 'not given'
	},

	location: {
		type: String,
		default: 'unknown'
	},

	type: {
		type: String,
		default: 'Full Time'
	},

	deadline: {
		type: Date
	},

	category: {
		type: String,
		default: 'Software Engineer'
	},

	experience: {
		type: String,
		default: 'Entry Level'
	},

	stipend: {
		type: String,
		default: 'unknown'
	},

	query: {
		type: String
	},

	createdAt: {
		type: Date,
		default: Date.now
	},

	students: [
		{
			id: {
				type: mongoose.Schema.Types.ObjectID,
				ref: 'User'
			},
			shortlisted: {
				type: Boolean,
				default: false
			},
			rejected: {
				type: Boolean,
				default: false
			},
			name: String
		}
	],

	questions: [
		{
			type: mongoose.Schema.Types.ObjectID,
			ref: 'Question'
		}
	]
});

module.exports = mongoose.model('Job', jobSchema);
