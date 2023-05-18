const express = require('express'),
	isAuth = require('../controllers/authMiddlewares').isAuth,
	isAdmin = require('../controllers/authMiddlewares').isAdmin,
	router = express.Router();

const jobController = require('../controllers/job');

//JOB INDEX ROUTE
router.get('/jobs', jobController.jobIndex);
//JOB NEW FORM ROUTE
router.get('/jobs/new', isAuth, isAdmin, jobController.newJobForm);
//JOB CREATE ROUTE
router.post('/jobs', isAuth, isAdmin, jobController.createNewJob);
//JOB SHOW ROUTE
router.get('/jobs/category', jobController.jobCategory);
router.get('/jobs/location', jobController.jobLocation);
router.get('/jobs/:id', jobController.showJob);
//JOB EDIT PAGE ROUTE
router.get('/jobs/:id/edit', isAuth, isAdmin, jobController.editJobForm);
//JOB UPDATE ROUTE
router.put('/jobs/:id', isAuth, isAdmin, jobController.updateJob);
//JOB DELETE ROUTE
router.delete('/jobs/:id', isAuth, isAdmin, jobController.destroyJob);
//USER APPLY FOR JOB ROUTE
router.get('/jobs/:id/apply/:userID', isAuth, jobController.applyForJob);
//JOB STATUS ROUTE
router.get('/jobs/:id/status', isAuth, isAdmin, jobController.jobSetStatus);

module.exports = router;
