const express = require('express'),
	isAuth = require('../controllers/authMiddlewares').isAuth,
	isAdmin = require('../controllers/authMiddlewares').isAdmin,
	methodOverride = require('method-override'),
	router = express.Router();

var Job = require('../models/job'),
	Question = require('../models/question'),
	User = require('../models/user');

//QUESTION NEW FORM ROUTE
router.get('/jobs/:id/questions/new', isAdmin, async (req, res) => {
	try {
		const job = await Job.findById(req.params.id);
		res.render('questions/new', { job, page: 'Job Questions' });
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}/questions`);
	}
});

//QUESTION CREATE ROUTE
router.post('/jobs/:id/questions', isAdmin, async (req, res) => {
	try {
		const question = new Question(req.body.question),
			job = await Job.findById(req.params.id);
		await question.save();
		job.questions.push(question);
		await job.save();
		req.flash('success', 'Successfully added question');
		res.redirect(`/jobs/${req.params.id}/questions`);
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}/questions`);
	}
});

//QUESTION SHOW ROUTE
router.get('/jobs/:id/questions', isAdmin, async (req, res) => {
	try {
		const job = await Job.findById(req.params.id).populate('questions');
		res.render('questions/show', { job, page: 'Question' });
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}/questions`);
	}
});

//QUESTION EDIT FORM ROUTE
router.get('/jobs/:id/questions/:questionId/edit', isAdmin, async (req, res) => {
	try {
		const question = await Question.findById(req.params.questionId);
		res.render('questions/edit', { jobId: req.params.id, question, page: 'Edit Question' });
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}/questions`);
	}
});

// QUESTION UPDATE ROUTE
router.put('/jobs/:id/questions/:questionId', isAdmin, async (req, res) => {
	try {
		await Question.findByIdAndUpdate(req.params.questionId, req.body.question);
		req.flash('success', 'Successfully updated question');
		res.redirect(`/jobs/${req.params.id}/questions`);
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}/questions`);
	}
});

//QUESTION DELETE ROUTE
router.delete('/jobs/:id/questions/:questionId', isAdmin, async (req, res) => {
	try {
		await Question.findByIdAndRemove(req.params.questionId);
		req.flash('success', 'Successfully deleted question');
		res.redirect(`/jobs/${req.params.id}/questions`);
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}/questions`);
	}
});

//TEST FORM ROUTE
router.get('/jobs/:id/test/:userId', isAuth, async (req, res) => {
	try {
		if (req.user.selected == true) {
			req.flash('error', 'You are already selected for another job');
			return res.redirect('back');
		}
		const job = await Job.findById(req.params.id).populate('questions');
		const user = await User.findById(req.params.userId);
		const registrationExists = await Job.findOne({
			_id: req.params.id,
			'students.id': user._id
		});
		if (!registrationExists) {
			req.flash('error', `You have to apply first!`);
			return res.redirect('back');
		}
		const shortlistExists = await Job.findOne({
			_id: req.params.id,
			'students.id': user._id,
			'students.shortlisted': true
		});
		if (shortlistExists) {
			req.flash('error', `You have already been shortlisted for this job!`);
			return res.redirect('back');
		}
		const rejectionExists = await Job.findOne({
			_id: req.params.id,
			'students.id': user._id,
			'students.rejected': true
		});
		if (rejectionExists) {
			req.flash('error', `You have already been rejected for this job!`);
			return res.redirect('back');
		}
		res.render('test-info', { user, job, page: 'Test Info' });
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}/questions`);
	}
});

router.get('/jobs/:id/test/:userId/form', isAuth, async (req, res) => {
	try {
		const job = await Job.findById(req.params.id).populate('questions'),
			user = await User.findById(req.params.userId);
		res.render('test', { user, job, page: 'Test' });
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}/questions`);
	}
});

//TEST FORM LOGIC
router.post('/jobs/:id/test/:userId', isAuth, async (req, res) => {
	try {
		if (req.user.selected == true) {
			req.flash('error', 'You can only apply once!');
			return res.redirect('back');
		}
		const foundJob = await Job.findById(req.params.id).populate('questions');
		let marks = 0,
			total = foundJob.questions.length * 0.75;
		for (let i = 0; i < foundJob.questions.length; i++) {
			if (foundJob.questions[i].correctAns == req.body.option[i]) {
				marks++;
			}
		}
		if (marks >= total) {
			foundJob.students.forEach(async (student) => {
				if (student.id.equals(req.user._id)) {
					student.shortlisted = true;
					await foundJob.save();
					req.flash('success', 'Successfully submitted test');
					return res.redirect(`/jobs/${req.params.id}`);
				}
			});
		} else {
			foundJob.students.forEach(async (student) => {
				if (student.id.equals(req.user._id)) {
					student.rejected = true;
					await foundJob.save();
					req.flash('success', 'Successfully submitted test');
					return res.redirect(`/jobs/${req.params.id}`);
				}
			});
		}
	} catch (error) {
		req.flash('error', 'Something went wrong in the database');
		console.log(error);
		res.redirect(`/jobs/${req.params.id}/questions`);
	}
});

module.exports = router;
