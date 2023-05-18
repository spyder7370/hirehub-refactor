const Resume = require('../models/resume'),
	User = require('../models/user');

module.exports.editResume = async (req, res) => {
	try {
		const { id } = req.params,
			user = await User.findById(id);
		let resume = {};
		if (user.resume) resume = await Resume.findById(user.resume);
		res.render('resume/edit', { user, resume, page: 'Edit Resume' });
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/users/${req.params.id}`);
	}
};

module.exports.showResume = async (req, res) => {
	try {
		const { id } = req.params,
			user = await User.findById(id);
		if (!user.resume) return res.redirect(`/users/${id}/edit`);
		const resume = await Resume.findById(user.resume);
		res.render('resume/show', { user, resume, page: 'Resume' });
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/users/${req.params.id}`);
	}
};

module.exports.updateResume = async (req, res) => {
	try {
		// res.send(filterResume(req.body.project));
		console.log(req.body);
		const { id } = req.params,
			{ firstname, lastname } = req.body,
			user = await User.findById(id);
		if (req.file) {
			console.log(req.file);
			user.avatar = req.file.path;
			await user.save();
		}
		if (!req.body.resume) req.body.resume = {};
		if (firstname && lastname) req.body.resume.name = firstname + ' ' + lastname;
		if (req.body.education) req.body.resume.education = filterResume(req.body.education);
		if (req.body.experience) req.body.resume.experience = filterResume(req.body.experience);
		if (req.body.project) req.body.resume.projects = filterResume(req.body.project);
		if (!user.resume) {
			const resume = new Resume(req.body.resume);
			resume.user = user._id;
			await resume.save();
			user.resume = resume._id;
			await user.save();
			res.redirect(`/users/${id}/resume/edit`);
		} else {
			await Resume.findByIdAndUpdate(user.resume, req.body.resume);
			req.flash('success', 'Changes saved!!');
			res.redirect(`/users/${id}/resume/edit`);
		}
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/users/${req.params.id}`);
	}
};

const filterResume = (obj) => {
	let ans = [];
	console.log(obj);
	for (let key in obj) {
		if (obj[key].constructor !== Array) obj[key] = [ obj[key] ];
		obj[key].forEach((item, i) => {
			if (ans.length < i + 1) ans.push({});
			ans[i][key] = item;
		});
	}
	console.log(ans);
	return ans;
};
