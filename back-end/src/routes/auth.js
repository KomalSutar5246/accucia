const express = require ('express');
const { signup, signin } = require('../controller/auth');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../validators/auth');
const router = express.Router();


router.post('/signup',validateSignupRequest, isRequestValidated, signup);

router.post('/signin', validateSigninRequest, isRequestValidated, signin);

//currently commented
// router.post('/profile', requireSignin, (req, res) => {
// res.status(200).json({user: 'profile'})
// });

module.exports = router;