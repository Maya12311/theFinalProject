import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import '../Style/Navbar.css';


export default function Navbar() {

	const { user, isLoggedIn, logoutUser } = useContext(AuthContext)

	return (
		<nav>
		
			<Link to='/'>
				<button className='navi'>HOME</button>
			</Link>
			{isLoggedIn ?
				(
					<>
						<Link to={`/profile/${user._id}`}>
							<button className='navi'>PROFILE</button>
						</Link>
						<button className = 'navi' onClick={logoutUser}>LOG OUT</button>
					</>
				) : (
					<>
						<Link to='/signup'>
							<button className='navi'>SIGN UP</button>
						</Link>
						<Link to='/login'>
							<button className='navi'>LOGIN</button>
						</Link>
					</>
				)
			}
		</nav>
	)
}