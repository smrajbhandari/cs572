const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator/check");
const User = require("./../models/user");
const checkAuth = require('./../middleware/check-authentication');

// user signup
router.post("/signup", function(req, res, next) {
  bcrypt.hash(req.body.password, 10).then(password => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: password
    });

    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

// user login
router.post("/login", function(req, res, next) {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        res.status(401).json({
          message: "Worng password"
        });
      }

      console.log("I am here");
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "jfjsLJKLJ#JK28499*HFHHFl4&&48934hkHF8457Y48jHKJK#4797234",
        { expiresIn: "2h" }
      );

      res.status(200).json({
        _token: token,
        message: "Login Successfull."
      });
    })
    .catch(error => {
      res.status(401).json({
        message: "Auth Failed",
        error: error
      });
    });
});


// Checking if user is authenticated or not
router.get('/users',checkAuth,function(req,res,next){
  User.find({})
  .then(result => {
    return res.status(200).json({
      data: result
    })
  })
  .catch(error => {
    return res.status(500).json({
      error: error
    })
  })
});

module.exports = router;
