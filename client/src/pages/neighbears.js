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
  console.log('Im the flatmate from state', flatmate)

console.log('flatmates',flatmate)
  useEffect(() => {                                        // <== ADD THE EFFECT
    axios
      .get(`/api/neighbears/${id}`)
      .then((response) => {

        //console.log('I wanna know what the response is about', response)
        //setFlatmates(response.data.flatmates)
       // console.log('I wanna know what the response flatmate is about', response.data.flatmates)

        //console.log('frontend here for neighbears', response.data.sameHouse);
        setUserData(response.data.sameHouse)
        setFlatmates(response.data.infoAboutPerson)
      });
    
  }, [] ); 


 

    return(
      <div className='tryBackground'>
        <div>
       
       <div className='theHeading'>
        <h1>{user?.name}, these are your Neighbears from </h1>
        <h1>🏡{user?.street} {user?.streetNumber}</h1>
        </div>


        {
     userData.map((neighbear) => {
       
         return (
           

             <div className = "backgroundForNei">
             <div >
             <div className='bodyNei'>
             <hr></hr>
            
             <div className='containerNei container'>
             <div className='box'>
             <div className='imageNeighbears'>
             <img className='imgProfileNei' src={neighbear.imageUrl}></img>
             </div>
             </div>
            <div>
            <div className='nameNei'>
             <p>Name: {neighbear.name}</p>
             <p>Email address: {neighbear.email}</p>
             </div>
{/*            
{
           flatmate.map(function (flatmates)  {
             
              
            flatmates.owner === neighbear._id
            ? <p>I live with: {flatmates.flatmate}</p>
            : <p>nope</p>

             
               })

} */}
             </div>
             </div>
             </div>
             </div>
             </div>
      


             

         )
     })}


     

        
        <p></p>
        </div>
        </div>
    )
}

export default OverviewNeighbear