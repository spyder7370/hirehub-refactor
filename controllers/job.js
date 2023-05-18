const Job = require('../models/job'),
	Notification = require('../models/notification'),
	User = require('../models/user');
const axios = require('axios').default;
const SERPAPI_KEY = process.env.SERPAPI_KEY;

// function escapeRegex(text) {
// 	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// }

module.exports.jobIndex = async (req, res) => {
	try {
		let noMatch = null,
			{ search, category } = req.query;
		if (search) {
			search = search.replace('%20', ' ');
			category = category.replace('%20', ' ');
			category = category.replace('%2F', '/');
			const regex = new RegExp(search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi');
			let jobs;
			if (!category) jobs = await Job.find({ name: regex });
			else jobs = await Job.find({ name: regex, category });
			if (jobs.length < 1) noMatch = 'No jobs match that query, please try again.';
			res.render('jobs/index', { jobs, noMatch, page: 'Job Listings' });
		} else {
			const jobs = await Job.find({});
			res.render('jobs/index', { jobs, noMatch, page: 'Job Listings' });
		}
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect('/jobs/new');
	}
};

module.exports.newJobForm = async (req, res) => {
	res.render('jobs/new', { page: 'New Job' });
};

module.exports.createNewJob = async (req, res) => {
	try {
		const newJob = await new Job(req.body.job);
		const result = await axios.get(
			`https://serpapi.com/search.json?engine=google&q=${newJob.companyName}+icon&google_domain=google.com&tbs=ic%3Atrans&tbm=isch&ijn=0&api_key=${SERPAPI_KEY}`
		);
		newJob.logo = result.data.images_results[0].original;
		const newNotif = await new Notification({
			description: `${req.body.job.companyName} just posted a new job for the post ${req.body.job.jobName} !!`,
			author: req.body.job.companyName
		});
		await newJob.save();
		await newNotif.save();
		req.flash('success', 'Successfully posted job');
		res.redirect(`/jobs/${newJob._id}`);
	} catch (err) {
		req.flash('error', 'Something went wrong in jobs database');
		console.log(err);
		res.redirect('/jobs/new');
	}
};

module.exports.showJob = async (req, res) => {
	try {
		const job = await Job.findById(req.params.id).populate({
			path: 'students',
			populate: {
				path: 'id'
			}
		});
		res.render('jobs/show', { job, page: 'Job' });
	} catch (error) {
		req.flash('error', 'Something went wrong in jobs database');
		console.log(error);
		res.redirect('/jobs');
	}
};

module.exports.editJobForm = async (req, res) => {
	try {
		const job = await Job.findById(req.params.id);
		res.render('jobs/edit', { job, page: 'Edit Job' });
	} catch (error) {
		req.flash('error', 'Something went wrong in jobs database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}`);
	}
};

module.exports.updateJob = async (req, res) => {
	try {
		await Job.findByIdAndUpdate(req.params.id, req.body.job);
		req.flash('success', 'Successfully updated job');
		res.redirect(`/jobs/${req.params.id}`);
	} catch (error) {
		req.flash('error', 'Something went wrong in jobs database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}`);
	}
};

module.exports.destroyJob = async (req, res) => {
	try {
		await Job.findByIdAndRemove(req.params.id);
		req.flash('success', 'Successfully deleted job');
		res.redirect('/jobs');
	} catch (error) {
		req.flash('error', 'Something went wrong in jobs database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}`);
	}
};

module.exports.applyForJob = async (req, res) => {
	try {
		const student = await User.findById(req.params.userID),
			job = await Job.findById(req.params.id);
		if (req.user.cgpa < job.eligibility) {
			req.flash('error', 'Required criteria not met!');
			return res.redirect('back');
		}
		console.log(student);
		const registrationExists = await Job.find({
			_id: req.params.id,
			'students.id': student._id
		});
		if (registrationExists.length > 0) {
			req.flash('error', 'You can only apply once!');
			return res.redirect('back');
		}
		job.students.push({
			id: student._id,
			name: student.firstName + student.lastName
		});
		await job.save();
		student.appliedJobs.push(job);
		await student.save();
		req.flash('success', 'Successfully applied!!');
		res.redirect(`/jobs/${req.params.id}`);
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}`);
	}
};

module.exports.jobSetStatus = async (req, res) => {
	try {
		const { status } = req.query;
		const { id } = req.params;
		if (!status) {
			req.flash('error', 'please provide a status');
			return res.redirect(`/jobs/${id}`);
		}
		const job = await Job.findByIdAndUpdate(id, { status });
		const newNotif = await new Notification({
			description: `${job.companyName} just updated its status: ${status} !!`,
			author: job.companyName
		});
		await newNotif.save();
		req.flash('success', 'Job status updated');
		return res.redirect(`/jobs/${id}`);
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}`);
	}
};

module.exports.jobCategory = async (req, res) => {
	try {
		let { name } = req.query;
		if (!name) return res.redirect('/jobs');
		name = name.replace('%20', ' ');
		name = name.replace('-', '/');
		const jobs = await Job.find({ category: name });
		res.render('jobs/category', { jobs, page: 'Jobs Filter' });
	} catch (error) {
		req.flash('error', 'Something went wrong in jobs database');
		console.log(error);
		res.redirect(`/jobs`);
	}
};

module.exports.jobLocation = async (req, res) => {
	try {
		let { name } = req.query;
		if (!name) return res.redirect('/jobs');
		name = name.replace('%20', ' ');
		const jobs = await Job.find({ location: name });
		res.render('jobs/location', { jobs, page: 'Jobs Filter' });
	} catch (error) {
		req.flash('error', 'Something went wrong in jobs database');
		console.log(error);
		res.redirect(`/jobs`);
	}
};
