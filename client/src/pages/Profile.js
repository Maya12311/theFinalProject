import profilePic from '../Style/images/ProfilePic.jpeg';
//import '../Style/Stylesheets/Profile.css';
import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'


function Profile(props){
  const {  user } = useContext(AuthContext)
  
    return(
        <div>

        <div>

        


       <p>Hello {user?.name}</p>
       <p>{user.street}</p> <p>{user.streetNumber}</p>
       <Link to={`/neighbears/${user._id}`}><button>
       Neighbears</button></Link>
       <Link to={`/overview`}><button>
       Overview</button></Link>
      
       <Link to={`/event`}> 
       
      <button>create an event</button>
      </Link>

         
        <img src={profilePic} alt="pictureOfanonymous"/>
     
        </div>
       
        </div>
        
    )
}


export default Profile