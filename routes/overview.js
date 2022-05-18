const router = require("express").Router();
const { populate } = require("../models/Event");
const Event = require('../models/Event');
const User = require("../models/User");



router.get('/:id', (req, res, next) => {
	const userId = req.params.id
	const userStreet = req.payload.street
	Event.find()
	.populate('owner')
		.then(events => {
			console.log(`this is the payload`, req.payload)
           const filter =  events.filter(event => {
			//   console.log(event.owner.street, userStreet)
			 return  event.owner.street === userStreet
			   
		   })
         console.log( `ARE this are all the filterd events`, filter )
		 
			res.status(200).json({'events': filter})

		})
	// if the token is valid we can access it on : req.payload
	//console.log('request payload is: ', req.payload)
	.catch(err => {
		console.log(err)
		res.status(500).json({ 'message': 'Internal Server Error' })
	})


});





module.exports = router


