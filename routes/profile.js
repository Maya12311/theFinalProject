const router = require("express").Router();
const User = require("../models/User");

router.get('/', (req, res, next) => {
  User.find()
      .then(users => {
          console.log(`is this route working?`,users)
        res.status(200).json(users)
      })
      .catch(err => next(err))
  });


  router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
      .then(test => {
        res.status(200).json(test)
        console.log('MIAU, MIAU, MIAU',test)
      })
      .catch(err => next(err))
  });

  module.exports = router;

