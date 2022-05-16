
const router = require("express").Router();
const Event = require('../models/Event')




router.post('/', (req, res, next) => {
	const { eventType, theme, eventInfo } = req.body

    Event.create({ eventType, theme, eventInfo })
				.then(newEvent => {
					const {eventType, theme, eventInfo} = newEvent
                    console.log(`the new Event has been created`, newEvent)
					res.status(201).json({ newEvent})
				})
				.catch(err => {
					console.log(err)
					res.status(500).json({ message: 'Internal Server Error' })
				})
            })




router.get('/', (req, res, next) => {
	Event.find()
		.then(events => {
			res.status(200).json( `this are all the events`, events )

		})
	// if the token is valid we can access it on : req.payload
	//console.log('request payload is: ', req.payload)
	.catch(err => {
		console.log(err)
		res.status(500).json({ message: 'Internal Server Error' })
	})


});

module.exports = router