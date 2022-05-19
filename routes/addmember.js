const router = require("express").Router();
const AddMember = require("../models/AddMember");
const User =require("../models/User");

router.post('/:id', (req, res, next) => {
    const userId = req.params.id
	const {flatmate, relationship, age} = req.body

	const owner = userId
   // console.log('this is the id for neighbears', userId)

			AddMember.create({flatmate, relationship, age, owner})
            .then(flatmates => {
				const{flatmate, relationship, age, owner} = flatmates

             //  console.log(flatmates)
			res.status(200).json({ sameFlat: flatmates} )

		})
	// if the token is valid we can access it on : req.payload
	//console.log('request payload is: ', req.payload)
	.catch(err => {
	//	console.log(err)
		res.status(500).json({ message: 'Internal Server Error' })
	})


});




router.get("/", (req, res, next) => {
	res.json("working");
  });
  


module.exports = router;