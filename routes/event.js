
const router = require("express").Router();
const Event = require('../models/Event')




router.post('/:id', (req, res, next) => {
	const id= req.params.id

	const { eventType, theme, eventInfo, date } = req.body

    Event.create({ eventType, theme, eventInfo, date, owner: id})
				.then(newEvent => {
					const {eventType, theme, eventInfo, date, owner: id} = newEvent
                   console.log(`the new Event has been created`, newEvent)
					res.status(201).json({ newEvent})
				})
				.catch(err => {
					console.log(err)
					res.status(500).json({ message: 'Internal Server Error' })
				})
            })




router.get('/:id', (req, res, next) => {
	const id= req.params.id
	console.log('Im the id from backend', id)

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