import profilePic from '../Style/images/ProfilePic.jpeg';
import '../Style/Stylesheets/Profile.css';


function Profile(props){

  console.log(props)
    return(
        <div>
        <div>

        <img src={profilePic} alt="pictureOfanonymous"/>
        </div>
        <div>
          <p></p>  
        </div>
        </div>
    )
}


export default Profile