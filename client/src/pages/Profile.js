import profilePic from '../Style/images/ProfilePic.jpeg';
import '../Style/Stylesheets/Profile.css';
import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth'




function Profile(props){
  const { isLoggedIn, logoutUser, user } = useContext(AuthContext)


  const { id } = useParams()

	const [userdata, setUserdata] = useState(null)
  console.log(`does it work`,userdata)
  console.log(user)

	useEffect(() => {
		axios.get(`/api/profile/${id}`)
			.then(response => {
				console.log(`SHOW, SHOW, SHOW MEEEE`,response)
				setUserdata(response.data)
			})
			.catch(err => console.log(err))
	}, [])



    return(
        <div>
        <div>


       <p>Hello {user?.name}</p>
       <p>{user.street}</p> <p>{user.streetNumber}</p>


        <img src={profilePic} alt="pictureOfanonymous"/>
        </div>
        <div>
          <p></p>  
        </div>
        </div>
    )
}


export default Profile