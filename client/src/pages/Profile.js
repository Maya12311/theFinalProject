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
  console.log(`I'm the id in the profile frontend`, {id})

  const [addOneMember, setAddOneMember] = useState([]);
console.log(`Da`, addOneMember)

  useEffect(() => {                                       
    axios
      .get(`/api/profile/${id}`)
      .then((response) => {
        console.log('frontend here for neighbears', response.data);
        setAddOneMember(response.data)
      });
    
  }, [] ); 



    return(
        <div>

        <div>

        
        <div>
        <img src={profilePic} alt="pictureOfanonymous"/>
        </div>

       <p>Hello {user?.name}</p>
       <p>{user.street}</p> <p>{user.streetNumber}</p>
       <Link to={`/neighbears/${user._id}`}><button>
       Neighbears</button></Link>
       <Link to={`/overview`}><button>
       Overview</button></Link>
      
       <Link to={`/event`}> 
       
      <button>create an event</button>
      </Link>


      <Link to={`/addMember/${user._id}`}><button>
       Add Flatmates, partner or Family member</button></Link>
       
        </div>
       
          <div className='addMember'>

          {addOneMember.map((member) => {
         console.log('in the map', member)
         return (
           <div>
           <ShowAddMember infoOneMember={member}
           />

           </div>
         )
         
         })}

          </div>



        </div>
        
    )
}


export default Profile