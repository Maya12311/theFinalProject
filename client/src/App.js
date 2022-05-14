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
import OverviewNeighbear from './pages/OverviewNeighbear'


function App() {
 



  return (
    <div className="App">
     <Navbar />


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/neighbears' element={<OverviewNeighbear />} />
        <Route path='/overview' element={<OverviewNeighbear/>}/>
        <Route path ="*" element ={ErrorPage}/>
    </Routes>
    {/*<ProtectedRoute/>*/}

    </div>
  );
}

export default App;
