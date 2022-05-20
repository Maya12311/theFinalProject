import profilePic from '../Style/images/ProfilePic.jpeg';
import '../Style/Stylesheets/Profile.css';


function ShowAddMember(props){
//console.log('we are the props', props)

    return(
        <div className="cardShowMembers">

        <div>
        <p className="titleShowMembers">I live: {props.infoOneMember.flatmate}</p>
       <p className="titleShowMembers">  {props.infoOneMember.relationship}</p> 
       <p className="titleShowMembers"> I'm {props.infoOneMember.age} years old</p>

       </div>


       </div>
    )
}

export default ShowAddMember