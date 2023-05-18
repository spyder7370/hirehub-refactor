// REQUIRING NPM MODULES
const express = require('express'),
	flash = require('connect-flash'),
	localStrategy = require('passport-local'),
	methodOverride = require('method-override'),
	moment = require('moment'),
	MongoStore = require('connect-mongo'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	session = require('express-session');

require('dotenv').config();
const app = express();

//MONGOOSE CONNECTION
const uri = process.env.MONGODB_URI;
mongoose
	.connect(uri, { useNewUrlParser: true })
	.then(() => console.log('DB working!'))
	.catch((error) => console.log(error));

//SESSION CONFIGURATION
const sessionPass = process.env.SESSION_PASS;
app.use(
	session({
		secret: sessionPass,
		resave: false,
		saveUninitialized: false,
		// store: MongoStore.create({
		// 	mongoUrl: uri
		// }),
		cookie: {
			httpOnly: true,
			// secure: true,
			expires: Date.now() + 1000 * 60 * 60 * 24,
			maxAge: 1000 * 60 * 60 * 24
		}
	})
);

//REQUIRING MODELS
const Notif = require('./models/notification'),
	User = require('./models/user');
//PASSPORT CONFIGURATION
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//LOCAL CONFIGURATION
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(flash());
app.use(async (req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash('error');
	res.locals.success = req.flash('success');
	res.locals.moment = moment;
	res.locals.recentNotifs = await Notif.find().sort({ _id: -1 }).limit(4);
	next();
});

//REQUIRING ROUTES
const authRoutes = require('./routes/auth'),
	homeRoutes = require('./routes/home'),
	jobRoutes = require('./routes/jobs'),
	notificationRoutes = require('./routes/notifications'),
	questionRoutes = require('./routes/questions'),
	resumeRoutes = require('./routes/resume'),
	userRoutes = require('./routes/users');

//USING ROUTES
app.use('/', authRoutes);
app.use('/', homeRoutes);
app.use(jobRoutes);
app.use(notificationRoutes);
app.use(questionRoutes);
app.use(resumeRoutes);
app.use(userRoutes);
app.get('*', (req, res) => {
	res.render('404', { page: '404' });
});

//PORT CONNECTION
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('server started');
});
