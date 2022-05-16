import {useState} from "react";
//import '../Style/Stylesheets/Event.css';
import axios from 'axios';


function Event (){
    const [eventType, setEventType] = useState('')

    const [theme, setTheme] = useState('')
    const [eventInfo, setEventInfo] = useState('')


	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { eventType, theme, eventInfo }
		axios.post('/api/event', requestBody)
        .then((response) => {
          //  console.log('response', response)
            // Reset the state
            setEventType("");
            setTheme("");
            setEventInfo("")
          });
      };
     

	const handleTheme = e => setTheme(e.target.value)
	const handleDescribe = e => setEventInfo(e.target.value)

   

    return(
        <div className="body">
    <h1>Create an Event </h1>


<form onSubmit={handleSubmit}>

<div className="container">
    <select
    className="custom-select"
    placeholder="select the type"
    value={eventType}
    onChange={(e) => {
        const selectedEvent = e.target.value;
        setEventType(selectedEvent)
    }}
    >
        <option value="animals">Animals</option>
        <option value="moving">Moving</option>
        <option value="food">Food</option>
        <option value="sport">Sport</option>
        <option value="help">Help</option>
        <option value="post">Post</option>
        <option value="eventOrparty">Event/Party</option>
    </select>
    
    <label className="custom-select">Theme:</label>
    <input 
        className="custom-select"
        type="text"
        name="theme"
        placeholder="theme"
        value={theme}
        onChange={handleTheme}
        />

        <div> 

    <label></label>
    <textarea
        type="text"
        name="describe"
        rows={5}
        cols={60}
        placeholder="What is the event about"
        
        value={eventInfo}
        onChange={handleDescribe}
    />
    </div>

    <button className="signupButton navi" type="submit">Submit</button>

    </div>

</form>






        </div>
    )
    
}

export default Event