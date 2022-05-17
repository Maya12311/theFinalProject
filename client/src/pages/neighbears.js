import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'


function OverviewNeighbear() {

  let {id} = useParams()
  console.log(`I'm the id in the neighbours frontend`, {id})

  const [userData, setUserData] = useState([]);
console.log(`Da`, userData)

  useEffect(() => {                                        // <== ADD THE EFFECT
    axios
      .get(`/api/neighbears/${id}`)
      .then((response) => {
        console.log('frontend here for neighbears', response.data);
        setUserData(response.data)
      });
    
  }, [] ); 
    
    return(
        <div>
        Hello Neighbear
        </div>
    )
}

export default OverviewNeighbear