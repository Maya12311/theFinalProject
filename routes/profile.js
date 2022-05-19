const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const mongoose = require('mongoose')
const User = require('../models/User')

const AddMember = require("../models/AddMember");


// POST "/api/upload" => Route that will receive an image, send it to Cloudinary via the fileUploader and return the image URL
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {

  console.log("file is: ", req.file)
 
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  
  // Get the URL of the uploaded file and send it as a response.
  // 'secure_url' can be any name, just make sure you remember to use the same when accessing it on the frontend
  res.json({ secure_url: req.file.path });
});


 


router.put('/upload/:id',  (req, res, next) => {
  const { id } = req.params;
  
  // const {imageUrl} = req.body
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  User.findByIdAndUpdate(id, req.body, { new: true })
  console.log(req.body)
    .then((updatedProject) => res.json(updatedProject))
    .catch(error => res.json(error));
});



  router.get('/:id', (req, res, next) => {
  const id= req.params.id

    AddMember.find({owner: id})
    .then(member => {
      //console.log('what is the ', member)
      User.findById(id)
        .then( user => {
         // console.log('Im the user froom backend', user)
      res.status(200).json({member, user})
    })
  })
    .catch(err => next(err))
  });


// router.put -> User.findbyidandupdate()

  module.exports = router;

