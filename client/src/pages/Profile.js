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
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit= ()=>{

  }

//console.log(`Da`, addOneMember)

  useEffect(() => {                                       
    axios
      .get(`/api/profile/${id}`)
      .then((response) => {
      //  console.log('frontend here for neighbears', response.data);
        setAddOneMember(response.data)
      });
    
  }, [] ); 

  const handleFileUpload = e =>{

      // console.log("The file to be uploaded is: ", e.target.files[0]);
 
     const uploadData = new FormData();
 
      // imageUrl => this name has to be the same as in the model since we pass
      // req.body to .create() method when creating a new movie in '/api/movies' POST route
     uploadData.append("imageUrl", e.target.files[0]);
   
     axios.post("/api/profile/upload")
        .uploadImage(uploadData)
        .then(response => {
           console.log("response is: ", response);
           //response carries "secure_url" which we can use to update the state
        setImageUrl(response.secure_url);
        // axios.put um user upzudaten
        // user._id benutzen
        })
        .catch(err => console.log("Error while uploading the file: ", err));
  }

    return(

      <div className='background'>
        <div className='card'>

        <div>

        
        <div className='backgroundImage'>
        <img className="imgProfile" src={profilePic} alt="pictureOfanonymous"/>
        <form onSubmit={handleSubmit}>
        <input type="file" />
        <button type="submit">Save new movie</button>



        </form>
        </div>
                 
                  <h1 key={user?._id} className="title">
                    Hello {user?.name}
                  </h1>
                 
       
                  <h2 key={user?._id} >
                  Your current address is: 
                      <p>{user?.street} {user?.streetNumber} </p> 
                  </h2>

                <Link to={`/neighbears/${user?._id}`}><button className='profileButton'>
       Neighbears</button></Link>
       <Link to={`/overview/${user?._id}`}><button className='profileButton'>
       Overview</button></Link>
      
       <Link to={`/event/${user?._id}`}> 
       
      <button className='profileButton'>create an event</button>
      </Link>


      <Link to={`/addmember/${user?._id}`}><button className='profileButton'>
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
        </div>
        
    )
}


export default Profile