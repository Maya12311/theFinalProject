import profilePic from '../Style/images/ProfilePic.jpeg';
import '../Style/Stylesheets/Profile.css';
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import axios from 'axios';
import ShowAddMember from "../components/ShowAddMember"

function Profile(props){
  const {  user } = useContext(AuthContext)

  let {id} = useParams()
  //console.log(`I'm the id in the profile frontend`, {id})

  const [addOneMember, setAddOneMember] = useState([]);
//console.log(`Da`, addOneMember)

  useEffect(() => {                                       
    axios
      .get(`/api/profile/${id}`)
      .then((response) => {
      //  console.log('frontend here for neighbears', response.data);
        setAddOneMember(response.data)
      });
    
  }, [] ); 



    return(
      <body className='background'>
        <div className='card'>

        <div>

        
        <div className='backgroundImage'>
        <img className="imgProfile" src={profilePic} alt="pictureOfanonymous"/>
        </div>
                 
                  <h1 key={user?._id} className="title">
                    Hello {user?.name}
                  </h1>
                 
       
                  <h2 key={user?._id} >
                  Your current address is: 
                      <p>{user?.street} {user?.streetNumber} </p> 
                  </h2>

                <Link to={`/neighbears/${user._id}`}><button className='profileButton'>
       Neighbears</button></Link>
       <Link to={`/overview`}><button className='profileButton'>
       Overview</button></Link>
      
       <Link to={`/event`}> 
       
      <button className='profileButton'>create an event</button>
      </Link>


      <Link to={`/addmember/${user._id}`}><button className='profileButton'>
       Add Flatmates, partner or Family member</button></Link>
       
        </div>
       
          <div className='addMember'>
              <h3>People/Animal I live with:</h3>
          {addOneMember.map((member) => {
       //  console.log('in the map', member)
         return (
           <div className='card'>
           <ShowAddMember infoOneMember={member}
           />

           </div>
         )
         
         })}

          </div>



        </div>
        </body>
        
    )
}


export default Profile