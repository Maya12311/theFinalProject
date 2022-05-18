const router = require("express").Router();


const AddMember = require("../models/AddMember");



  router.get('/:id', (req, res, next) => {
  const id= req.params.id

    AddMember.find({owner: id})
    .then(test => {
      res.status(200).json(test)
        console.log('MIAU, MIAU, MIAU',test)
    })
    .catch(err => next(err))
  });

  module.exports = router;

