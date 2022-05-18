import profilePic from '../Style/images/ProfilePic.jpeg';


function ShowAddMember(props){
//console.log('we are the props', props)

    return(
        <div className="cardShowMembers">

        <div>
        <p className="titleShowMembers">I live with: {props.infoOneMember.flatmate}</p>
       <p className="titleShowMembers"> It is my: {props.infoOneMember.relationship}</p> 
       <p className="titleShowMembers"> The age is: {props.infoOneMember.age}</p>

       </div>


       </div>
    )
}

export default ShowAddMember