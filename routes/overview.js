const router = require("express").Router();
const Event = require('../models/Event')



router.get('/', (req, res, next) => {
	Event.find()
		.then(events => {
            
            console.log( `ARE this are all the events`, events )
			res.status(200).json( {'events': events })

		})
	// if the token is valid we can access it on : req.payload
	//console.log('request payload is: ', req.payload)
	.catch(err => {
		console.log(err)
		res.status(500).json({ 'message': 'Internal Server Error' })
	})


});





module.exports = router