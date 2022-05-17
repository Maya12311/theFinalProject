
//import ShowEvents from "../components/ShowEvents"
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import ShowEvents from '../components/ShowEvents'


function AllPage(){

    const [event, setEvent] = useState([])
    //console.log('event state is', event)

    useEffect(() => {                                        // <== ADD THE EFFECT
		axios.get(`/api/overview`)  
			.then(response => {
				setEvent(response.data.events)
               // console.log('i m the state in axios', response.data.events)
			})
			.catch(err => console.log(err))
        },[])

        //for (const key of event){
        //    console.log(`not sure where that is`, key)
          
        //  }



  //console.log('second event state is ', event.events[0])
  
    return(
        <div>
       
     <h1>   The events are listed here:</h1>

     {
     event.map((event) => {
         return (
             <>             
             <ShowEvents eventData ={event}/>
             </>

         )
     })}


    


        </div>
    )
}

export default AllPage



  //  event.events.map((oneEvent) => {
       // console.log('miau', oneEvent)
  //        return( 
//<li key={oneEvent._id}>
//<p> The theme is: {oneEvent.theme}</p>
//</li>
    //  )})}