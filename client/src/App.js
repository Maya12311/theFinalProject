// App.js
//import Navbar from "./components/Navbar"
import './App.css';
import {  Routes, Route } from "react-router-dom";  
import Navbar from './components/Navbar'

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Neighbears from './pages/Neighbears'
import Event from './pages/Event';
import AllPage from './pages/AllPage';
import AddMember from "./pages/AddMember"


function App() {
 



  return (
    <div className="App">
     <Navbar />


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/neighbears/:id' element={<Neighbears />} />
        <Route path='/event/:id' element={<Event/>}/>
        <Route path='/overview/:id' element={<AllPage/>}/>
        <Route path='/addmember/:id' element={<AddMember/>}/>


        <Route path ="*" element ={ErrorPage}/>
    </Routes>
    {/*<ProtectedRoute/>*/}

    </div>
  );
}

export default App;
