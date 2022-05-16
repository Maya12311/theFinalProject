import ShowEvents from "../components/ShowEvents"
import axios from 'axios'
import React, { useState, useEffect} from 'react'


function AllPage(){

    const [event, setEvent] = useState({})


    useEffect(() => {                                        // <== ADD THE EFFECT
		axios.get(`/api/overview`)  
			.then(response => {
				setEvent(response.data)
			})
			.catch(err => console.log(err))
        },[])


  console.log('this are the ', event.events)
  
    return(
        <div>
        The events are listed here:

      {  event.events.map((oneEvent) => {
        console.log('miau', oneEvent)

          return( 
<li key={oneEvent._id}>
The theme is: <p>{oneEvent.theme}</p>



</li>

      )})}


        </div>
    )
}

export default AllPage