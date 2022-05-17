import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import profilePic from '../Style/images/ProfilePic.jpeg';
import '../Style/Stylesheets/Neighbear.css';


function OverviewNeighbear() {
    const {  user } = useContext(AuthContext)

console.log(`the data of the user is the following:`, user)
  let {id} = useParams()
  console.log(`I'm the id in the neighbours frontend`, {id})

  const [userData, setUserData] = useState([]);
console.log(`Da`, userData)

  useEffect(() => {                                        // <== ADD THE EFFECT
    axios
      .get(`/api/neighbears/${id}`)
      .then((response) => {
        console.log('frontend here for neighbears', response.data.sameHouse);
        setUserData(response.data.sameHouse)
      });
    
  }, [] ); 
    
    return(
        <div>
       
       <div>
        <h1>{user?.name}, this are your Housemates from </h1>
        <h2>{user?.street} {user?.streetNumber}</h2>
        </div>


        {
     userData.map((neighbear) => {
         console.log('in the map', neighbear)
         return (

             <>  
             <div className='container'>
             <div>
             <img src={profilePic}></img>
             </div>
            <div>
             <p>Name: {neighbear.name}</p>
             <p>Email address: {neighbear.email}</p>
             </div>
             </div>
             </>

         )
     })}


     

        
        <p></p>
        </div>
    )
}

export default OverviewNeighbear