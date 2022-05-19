//import '../Style/Stylesheets/Scrollbar.css';
import React, { useState, useEffect} from 'react'


function ShowEvents(props){



console.log('propis here', props.eventData)
//<p>{props.eventData.owner.name}</p>

const selectedFood = () => {
  
 if(props.eventData.eventType === "Food/Drinks 🥨🍸🥦"){
  return  <div className='containerFood scroll floatLeft '><h3>{props.eventData.eventType} </h3><h3> { props.eventData.theme}</h3> <p>{props.eventData.owner.name}</p><p>{props.eventData.eventInfo}</p> <p>{props.eventData.date}</p></div>
      
  }
 }

 const selectedParty = () => {
  
  if(props.eventData.eventType ===  "Party 💄"){
   return  <div className='containerParty scroll floatLeft '><h3>{props.eventData.eventType} </h3><h3> { props.eventData.theme}</h3> <p>{props.eventData.owner.name}</p><p>{props.eventData.eventInfo}</p> <p>{props.eventData.date}</p></div>
       
   }
  }


 

 const selectedSport = () => {
  if(props.eventData.eventType === "Sport ⚽️🏈🥎"){
   return  <div className='containerSport scroll floatRight'><h3>{props.eventData.eventType} </h3><h3>{props.eventData.theme}</h3><p>{props.eventData.owner.name}</p> <p>from {props.eventData.eventInfo}</p><p>{props.eventData.eventInfo}</p> <p>{props.eventData.date}</p></div>
       
   }
  }

  const selectedMoving = () => {
    if(props.eventData.eventType === "Moving 😱"){
     return  <div className='containerMoving scroll floatRight'><h3>{props.eventData.eventType} </h3><h3>{props.eventData.theme}</h3><p>{props.eventData.owner.name}</p> <p>from {props.eventData.eventInfo}</p><p>{props.eventData.eventInfo}</p> <p>{props.eventData.date}</p></div>
         
     }
    }


 const selectedAnimals = () => {
  if(props.eventData.eventType === 'Animals/Plants 🐵'){
   return  <div className='scroll containerAnimals'><h3>{props.eventData.eventType} </h3><h3>{props.eventData.theme}</h3><p>{props.eventData.owner.name}</p> <p>from {props.eventData.eventInfo}</p><p>{props.eventData.eventInfo}</p> <p>{props.eventData.date}</p></div>
       
   }
  }
//console.log('what', props.eventData.eventType)



const selectedPost = () => {
  if(props.eventData.eventType === "Post 📦✉️"){
   return  <div className='containerPost scroll floatRight'><h3>{props.eventData.eventType} </h3><h3>{props.eventData.theme}</h3> <p>{props.eventData.owner.name}</p><p>from {props.eventData.eventInfo}</p><p>{props.eventData.eventInfo}</p> <p>{props.eventData.date}</p></div>
       
   }
  }



const selectedHelp = () => {
  if(props.eventData.eventType === 'Help 🚨'){
   return  <div className='scroll containerHelp'><h3>{props.eventData.eventType} </h3><h3>{props.eventData.theme}</h3> <p>{props.eventData.owner.name}</p><p>from {props.eventData.eventInfo}</p><p>{props.eventData.eventInfo}</p> <p>{props.eventData.date}</p></div>
       
   }
  }


    return(
<div className='otherContainer'>
       
        


    
          
            
            <div>
           {selectedAnimals()}
           </div>
            
            <div>
            {selectedSport()}
            </div>
                    
           
           <div className='foodContainer'>
            {selectedFood()}
          </div>

          <div>
            {selectedPost()}
          </div>

          <div>
            {selectedHelp()}
          </div>

          <div>
            {selectedParty()}
          </div>

          <div>
            {selectedMoving()}
          </div>

            </div>
            
    )
    }
export default ShowEvents



//<div className="scroll">
    //   <div className='floatLeft'></div>

   // <div className='floatRight'>
