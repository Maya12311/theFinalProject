import '../Style/Stylesheets/Scrollbar.css';


function ShowEvents(props){
console.log('propis here', props.eventData)

//<p>{props.eventData.owner.name}</p>


    return(
<div className='otherContainer'>
       <div className="scroll">
       <div className='floatLeft'>
        <div key={props.eventData._id}>
          <h3 > {props.eventData.eventType}</h3>
          <h3>{props.eventData.theme}</h3>
          <p>{props.eventData.date}</p>


          </div>
          
            <div className='floatRight'>
            <p>{props.eventData.eventInfo}</p>
            <p >created at:{props.eventData.createdAt}</p>
            <p >updated at:{props.eventData.updatedAt}</p>
            </div>
            </div>
            </div>
            </div>
    )
}

export default ShowEvents

