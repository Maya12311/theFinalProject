const router = require("express").Router();


const User = require("../models/User");

router.get('/profile', (req, res, next) => {
  const {profileId} = req.params.id
  console.log(profileId)
  User.find({})
      .then(users => {
          console.log(`is this route working?`,users)
        res.status(200).json(users)
      })
      .catch(err => next(err))
  });


  router.get('/:id', (req, res, next) => {
  const userById=  User.findById(req.params.id)
  console.log(userById)
      .then(test => {
        res.status(200).json(test)
        console.log('MIAU, MIAU, MIAU',test)
      })
      .catch(err => next(err))
  });

  module.exports = router;

