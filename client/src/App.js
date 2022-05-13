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


//const data = fetch('https://data.mongodb-api.com/app/data-bukxp/endpoint/data/beta');


function App() {
 



  return (
    <div className="App">
     <Navbar />


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile/:id' element={<Profile />} />

        <Route path ="*" element ={ErrorPage}/>
    </Routes>
    {/*<ProtectedRoute/>*/}

    </div>
  );
}

export default App;
