const express = require("express");
const router = express.Router();
const passport = require('passport');
const isAuth = require("./../../helpers/isAuth");
const User = require("../../models/User");

// @route   GET api/User/SignIn
// @desc    Sign In
// @access  Public
router.post('/signin',
  passport.authenticate('local', {
    successRedirect: '/api/user/main',
    failureRedirect: '/api/user/signin',
    failureFlash: true
  }),
  function (req, res) {
    res.redirect("/");
  }
);

// @route   POST api/User/SignUp
// @desc    Register in Website
// @access  Public
router.post('/signup', async (req, res) => {
  console.log(req.body);
  let errors = [];
  const { name, email, password, repeat_password } = req.body;
  if (password != repeat_password) {
    errors.push({ text: 'Passwords do not match.' });
  }
  if (password.length < 4) {
    errors.push({ text: 'Passwords must be at least 4 characters.' })
  }
  if (errors.length > 0) {
    res.json({ errors, name, email, password, repeat_password });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      res.redirect('/users/signup');
    } else {
      // Saving a New User 
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      console.log(newUser);
      res.json({ 'success_msg': 'You are registered.' });
      console.log("New user created!")
    }
  }
});

// @route   GET api/User/LogOut
// @desc    Log Out
// @access  Private
router.get('/logout',isAuth, (req, res) => {
  req.logout();
  res.redirect('/');
});


//   /!\ CODE NO TESTED /!\    //
// @route   GET api/User/:ID
// @desc    Find User
// @access  Private
router.get('/:name',isAuth, async (req, res) => {
  const {Name} = req.params.name;
  const person = await User.find({name:Name}).select("-password").select("-email");
  if (!person) {
    return res.json({error:"No user found"});
  } else {
    return res.json(person)
  }
});

module.exports = router;