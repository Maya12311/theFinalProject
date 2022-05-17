

function ShowEvents(props){

console.log(props)

    return(
        <div>
            <p>{props.eventData.eventType}</p>
            <p>{props.eventData.theme}</p>
            <p>created at:{props.eventData.createdAt}</p>
             <p>updated at:{props.eventData.updatedAt}</p>
            
            <p>{props.eventData.eventInfo}</p>
            </div>
    )
}

export default ShowEvents

