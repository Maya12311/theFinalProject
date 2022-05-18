const router = require("express").Router();
const AddMember = require("../models/AddMember");
const User = require("../models/User");


router.get('/:id', (req, res, next) => {
    const userId = req.params.id
   // console.log('this is the id for neighbears', userId)
	User.findById(userId)
		.then(houseDetails => {
            const{street, streetNumber} = houseDetails
           // console.log(houseDetails)

            User.find({street: street, streetNumber: streetNumber, _id: { $ne: userId }})
            .then(neighbears => {
               // console.log(neighbears)
				

				
			res.status(200).json({ sameHouse: neighbears} )
		})
		})
	// if the token is valid we can access it on : req.payload
	//console.log('request payload is: ', req.payload)
	.catch(err => {
		console.log(err)
		res.status(500).json({ message: 'Internal Server Error' })
	})


});

module.exports = router