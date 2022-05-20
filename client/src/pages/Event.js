import {useState} from "react";
import '../Style/Stylesheets/Event.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function Event (){
    const [eventType, setEventType] = useState('')

    const [theme, setTheme] = useState('')
    const [eventInfo, setEventInfo] = useState('')
    const [date, setDate] = useState("")


    let {id} = useParams()


	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { eventType, theme, eventInfo, date }
		axios.post(`/api/event/${id}`, requestBody)
        .then((response) => {
          //  console.log('response', response)
            // Reset the state
            setEventType("");
            setTheme("");
            setEventInfo("")
            setDate("")
          });
      };
     

	const handleTheme = e => setTheme(e.target.value)
	const handleDescribe = e => setEventInfo(e.target.value)
    const handleDate = e => setDate(e.target.value)


   

    return(
        <div className="body">
    <h1>Create an Event </h1>


<form onSubmit={handleSubmit}>

<div className="containerEvent">
    <select
    className="custom-select"
    placeholder="select the type"
    value={eventType}
    onChange={(e) => {
        const selectedEvent = e.target.value;
        setEventType(selectedEvent)
    }}
    >
        <option >Select an Option</option>
        <option value="🐶">🐶</option>
        <option value="🌱">🌱</option>
        <option value="🍕">🍕</option>
        <option value="⚽️">⚽️</option>
        <option value="🆘">🆘</option>
        <option value="📬">📬</option>
        <option value="🎉">🎉</option>
    </select>
    
    <label ></label>
    <input 
        className="titelClass"
        type="text"
        name="theme"
        placeholder="Chose a titel"
        value={theme}
        onChange={handleTheme}
        />

<label ></label>
    <input 
        className="custom-select"
        type="date"
        name="date"
        placeholder=" date"
        value={date}
        onChange={handleDate}
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