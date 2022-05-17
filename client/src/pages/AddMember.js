import {useState} from "react";
import { useParams } from 'react-router-dom';

import axios from 'axios';

function AddMember(){

    let {id} = useParams()
    console.log(id)

    const [flatmate, setFlatmate] = useState('')
    const [relationship, setRelationship] = useState('')
    const [age, setAge] = useState(undefined)


	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = {  flatmate, relationship, age }
        console.log(requestBody)
		axios.post(`/api/addmember/${id}`, requestBody)
        .then((response) => {
          //  console.log('response', response)
            // Reset the state
            setRelationship("");
            setFlatmate("");
            setAge(undefined)
          });
      };
     

	const handleFlatmate = e => setFlatmate(e.target.value)
	const handleRelationship = e => setRelationship(e.target.value)
    const handleAge = e => setAge(e.target.value)



    return(
        <div>
<h1>Add everyone who lives with you 🐕‍🦺 🐈 🦨 👨‍👩‍👦‍👦</h1>
<form onSubmit={handleSubmit}>

<div className="container">
  
    
    <label className="custom-select">Who lives with you:</label>
    <input 
        className="custom-select"
        type="text"
        name="flatmate"
        placeholder="tell your housemates who you live with"
        value={flatmate}
        onChange={handleFlatmate}
        />

<label className="custom-select">Age:</label>
    <input 
        className="custom-select"
        type="text"
        name="age"
        placeholder=" age"
        value={age}
        onChange={handleAge}
        />

        <div> 

    <label></label>
    <textarea
        type="text"
        name="relationship"
       
        placeholder="What is the relationship state of you"
        
        value={relationship}
        onChange={handleRelationship}
    />
    </div>

    <button className="signupButton navi" type="submit">Submit</button>

    </div>

</form>


        </div>
    )
}

export default AddMember