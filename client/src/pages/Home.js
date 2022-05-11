import '../Style/Home.css';
import logo from '../Style/clipart19032.png'
import { Link } from "react-router-dom";   


export default function Home(){
    return(
        <div className='back'>
        <div className='backImage'>
        
        <div className='wrap'>
        <Link to ="./Login">
        <button  className='button'>
            <p className ='login'>Login</p>
        </button>
        </Link>
        <button className='button'>
            <p className ='login'>Register</p>
        </button>
        </div>
        
        <img className= "house" src={logo} alt="house"/>
        </div>
        </div>
    )
}

