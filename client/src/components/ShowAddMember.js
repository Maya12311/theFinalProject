function ShowAddMember(props){
console.log('we are the props', props)

    return(
        <div>
        <p>I live with: {props.infoOneMember.flatmate}</p>
       <p> It is my: {props.infoOneMember.relationship}</p> 
       <p> The age is: {props.infoOneMember.age}</p>


       </div>
    )
}

export default ShowAddMember