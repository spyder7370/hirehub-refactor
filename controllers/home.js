const Job = require('../models/job'),
	User = require('../models/user');

const homeGet = async (req, res) => {
	try {
		const jobs = await Job.find({ status: 'Active' }).sort({ _id: -1 }).limit(6);
		const jobCount = await Job.countDocuments(),
			userCount = await User.countDocuments(),
			activeCount = await Job.countDocuments({ status: 'Active' }),
			companiesCount = await Job.find().distinct('companyName');
		res.render('home', {
			recentJobs: jobs,
			jobCount,
			activeCount,
			companiesCount: companiesCount.length,
			userCount,
			page: 'Home'
		});
	} catch (error) {
		console.log(error);
		req.flash('error', 'Something went wrong, Please try again later');
		res.redirect('/login');
	}
};

module.exports = { homeGet };
