const express = require('express');
const router = express.Router();
// const authenticate = require('../middlewares/authenticate');
// const userService = require('../services/userService');


router.get('/', async (req, res, next) => {
    try {
        res.render('index', { title: 'Home' });
    } catch (err) {
        next(err);
    }
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

router.get('/resources', (req, res) => {
    res.render('resources');
});

router.get('/partnership', (req, res) => {
    res.render('partnership');
});

router.get('/consultancy', (req, res) => {
    res.render('consultancy');
});

router.get('/tech-training', (req, res) => {
    res.render('tech-training');
});

router.get('/become-a-partner', (req, res) => {
    res.render('partnership-form');
});

router.get('/book-consultation', (req, res) => {
    res.render('consultancy-form');
});

router.get('/enroll', (req, res) => {
    res.render('enroll');
});

router.get('/work-experience', (req, res) => {
    res.render('work-form');
});

router.get('/faq', (req, res) => {
    res.render('faq', { title: 'Frequently Asked Questions' });
})


router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});


// router.post('/login', async (req, res, next) => {
//     try {
//         req.session.user = await userService.login(req.body);
//         res.redirect('/users/dashboard');
//     } catch (err) {
//         next(err);
//     }
// });


module.exports = router;
