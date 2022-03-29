const express = require("express");
const res = require("express/lib/response");
const {ensureAuthenticated} = require('../config/auth')

const router = express.Router();

router.get('/', (req, res) => res.render('welcome'));
router.get('/about', (req, res) => res.render('about'));
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', { user: req.user}));
router.get('/profile', ensureAuthenticated, (req, res) => res.render('profile', { user: req.user}));
router.get('/create', ensureAuthenticated, (req, res) => res.render('creategeneral', { username: req.user.name}));

module.exports = router;
