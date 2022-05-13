// App.js
//import Navbar from "./components/Navbar"
import './App.css';
import {  Routes, Route } from "react-router-dom";  // <== IMPORT
import Navbar from './components/Navbar'

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { useState, useEffect } from 'react';
import axios from "axios";                       // <== IMPORT axios


//const data = fetch('https://data.mongodb-api.com/app/data-bukxp/endpoint/data/beta');


function App() {
 // data
  //.then (data => data.json()) 
  //.then (data => {
    // console.log(`this is the data from app`, data)
  //})
  //.catch((error) => {
    // console.error(error)
  //})

  //const [user, setUser] = useState(data);
  const [user, setUsers] = useState([]);
 
  useEffect(() => {                                        // <== ADD THE EFFECT
    axios
      .get("https://data.mongodb-api.com/app/data-bukxp/endpoint/data/beta")
      .then((response) => {
        console.log('response.data', response.data);
        setUsers(response.data)
      });
    
  }, [] ); 




  return (
    <div className="App">
     <Navbar />


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />

        <Route path ="*" element ={ErrorPage}/>
    </Routes>
    {/*<ProtectedRoute/>*/}

    </div>
  );
}

export default App;
