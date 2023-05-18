const express = require('express');
const router = express.Router();

const multer = require('multer'),
	{ storage } = require('../cloudinary/config'),
	upload = multer({ storage });

const { isAuth, checkUser } = require('../controllers/authMiddlewares');
const resumeController = require('../controllers/resume');

router.get('/users/:id/resume/edit', isAuth, checkUser, resumeController.editResume);

router.get('/users/:id/resume', resumeController.showResume);

router.patch('/users/:id/resume', isAuth, checkUser, upload.single('image'), resumeController.updateResume);

module.exports = router;
