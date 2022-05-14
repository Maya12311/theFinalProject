import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import '../Style/Navbar.css';


export default function Navbar() {

	const { user, isLoggedIn, logoutUser } = useContext(AuthContext)

	return (
		<nav>
		
			<Link to='/'>
				<button className='navi'>Home</button>
			</Link>
			{isLoggedIn ?
				(
					<>
						<Link to={`/profile/${user._id}`}>
							<button className='navi'>Profile</button>
						</Link>
						<button className = 'navi' onClick={logoutUser}>Log out</button>
					</>
				) : (
					<>
						<Link to='/signup'>
							<button className='navi'>Signup</button>
						</Link>
						<Link to='/login'>
							<button className='navi'>Login</button>
						</Link>
					</>
				)
			}
		</nav>
	)
}