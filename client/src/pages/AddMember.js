import '../Style/Stylesheets/AddMember.css';
import sidePic from '../Style/images/nice-seamless-pattern-vector-21114503.jpeg';

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function AddMember(){

    let {id} = useParams()
    //console.log(id)

    const [flatmate, setFlatmate] = useState('')
    const [relationship, setRelationship] = useState('')
    const [age, setAge] = useState(undefined)


	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = {  flatmate, relationship, age }
        console.log(requestBody)
		axios.post(`/api/addmember/${id}`, requestBody)
        .then((response) => {
            console.log('response', response)
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
        <div className='backgroundColor'>
        <div>
<h1> Wanna say something about yourself? </h1>
<form onSubmit={handleSubmit}>

<div className="containerAddMember">
  
    
    <label ></label>
    <input 
        className="label1"
        type="text"
        name="flatmate"
        placeholder="Floor and door direction"
        value={flatmate}
        onChange={handleFlatmate}
        />

<label ></label>
    <input 
        className="label2"
        type="text"
        name="age"
        placeholder="What's your age again?"
        value={age}
        onChange={handleAge}
        />

        <div> 

    <label></label>
    <textarea
        type="text"
        name="relationship"
        className="textfeld1"

        rows={5}
        cols={80}
       
        placeholder="If you like, you can share with your Neighbears infos about yourself :)"
        
        value={relationship}
        onChange={handleRelationship}
    />
    </div>


    <button className="signupButton navi buttonForm" type="submit">Submit</button>



    </div>

</form>


<div className='plants'>
    <img src={sidePic}/>
</div>

        </div>
        </div>
    )
}

export default AddMember