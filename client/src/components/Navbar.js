import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import '../Style/Navbar.css';


export default function Navbar() {

	const { user, isLoggedIn, logoutUser } = useContext(AuthContext)

	return (
		<nav>
			<Link to='/'>
				<button>Home</button>
			</Link>
			{isLoggedIn ?
				(
					<>
						<Link to={`/profile/${user._id}`}>
							<button>Profile</button>
						</Link>
						<button onClick={logoutUser}>Log out</button>
					</>
				) : (
					<>
						<Link to='/signup'>
							<button>Signup</button>
						</Link>
						<Link to='/login'>
							<button>Login</button>
						</Link>
					</>
				)
			}
		</nav>
	)
}