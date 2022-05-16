import profilePic from '../Style/images/ProfilePic.jpeg';
//import '../Style/Stylesheets/Profile.css';
import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import OverviewNeighbour from '../components/ShowOne'


function Profile(props){
  const {  user } = useContext(AuthContext)


  const { id } = useParams()
  console.log(`the id is this one`, id)

	const [userdata, setUserdata] = useState(null)

  useEffect(() => {                                        // <== ADD THE EFFECT
		axios.get(`api/profile/${id}`)
			.then(response => {
				console.log(`SHOW, SHOW, SHOW MEEEE`,response)
				setUserdata(response.data)
			})
			.catch(err => console.log(err))
    })


    console.log(userdata)

   
  

    return(
        <div>

        <div>

        


       <p>Hello {user?.name}</p>
       <p>{user.street}</p> <p>{user.streetNumber}</p>
       <Link to={`/neighbears${user._id}`}><button>
       Neighbears</button></Link>
       <Link to={`/overview`}><button>
       Overview</button></Link>
      
       <Link to={`/event`}> 
       
      <button>create an event</button>
      </Link>

        <OverviewNeighbour />
         
        <img src={profilePic} alt="pictureOfanonymous"/>
     
        </div>
       
        </div>
        
    )
}


export default Profile