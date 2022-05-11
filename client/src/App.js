// App.js
import Navbar from "./components/Navbar"
import './App.css';
import { Routes, Route } from "react-router-dom";  // <== IMPORT
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  return (
    <div className="App">
    <Navbar/>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path ="/register" element ={<Register/>}/>


        <Route path ="*" element ={ErrorPage}/>
    </Routes>
    </div>
  );
}

export default App;
