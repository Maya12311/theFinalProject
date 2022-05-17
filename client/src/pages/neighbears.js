import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import profilePic from '../Style/images/ProfilePic.jpeg';
import '../Style/Stylesheets/Neighbear.css';
import '../Style/Stylesheets/Profile.css';

import ShowAddMember from "../components/ShowAddMember"

function OverviewNeighbear() {
    const {  user } = useContext(AuthContext)

//console.log(`the data of the user is the following:`, user)
  let {id} = useParams()
 // console.log(`I'm the id in the neighbours frontend`, {id})

  const [userData, setUserData] = useState([]);
  const [flatmate, setFlatmates] = useState([]);
  //console.log('Im the flatmate from state', flatmate)

//console.log(`Da`, userData)

  useEffect(() => {                                        // <== ADD THE EFFECT
    axios
      .get(`/api/neighbears/${id}`)
      .then((response) => {
        //console.log('I wanna know what the response is about', response)
        setFlatmates(response.data.flatmates)
       // console.log('I wanna know what the response flatmate is about', response.data.flatmates)

        //console.log('frontend here for neighbears', response.data.sameHouse);
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
             <body className='bodyNei'>
             <hr></hr>
            
             <div className='containerNei container'>
             <div className='box'>
             <div className='imageNeighbears'>
             <img className='imageNei' src={profilePic}></img>
             </div>
             </div>
            <div>
            <div className='nameNei'>
             <p>Name: {neighbear.name}</p>
             <p>Email address: {neighbear.email}</p>
             </div>
           
{
           flatmate.map(function (flatmates)  {
             
             console.log('show me', flatmates)
              
            flatmates.owner === neighbear._id
            ? <p>I live with: {flatmates.flatmate}</p>
            : <p>nope</p>

             
               })

}
             </div>
             </div>
             </body>
             </>


             

         )
     })}


     

        
        <p></p>
        </div>
    )
}

export default OverviewNeighbear