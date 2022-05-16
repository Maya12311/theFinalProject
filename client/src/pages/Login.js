import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'
//import '../Style/Stylesheets/Login.css';



export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);


	const navigate = useNavigate()

	const { storeToken, verifyStoredToken, user } = useContext(AuthContext)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }
		axios.post('/api/auth/login', requestBody)
			.then(response => {
				// redirect to projects
				console.log('i have a token mothafukkas')
				const token = response.data.authToken
				// store the token
				storeToken(token)
				verifyStoredToken()
					.then(() => {
						// redirect to projects
						navigate(`/profile/${user?._id}`)
					})
			})
			.catch(err => {
				const errorDescription = err.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	return (

		<>
		<div className='wrapper'>
		<div className='title'>
		Login form
		</div>
			<form  onSubmit={handleSubmit}>
			<div className='field'>
			
				<input type="text" value={email} onChange={handleEmail} />
				<label htmlFor="email">Email: </label>
				</div>

				<div className="field">
				<input type="password" value={password} onChange={handlePassword} />
				<label htmlFor="password">Password: </label>
				</div>

				<div className='content'>
				<div className='checkbox'>

				<input type="checkbox" id="remember-me"/>
                <label htmlFor="remember-me">Remember me</label>
				</div>
				</div>
				<div>
				<button className="navi" type="submit">Log In</button>
				</div>
				<div className='signup-link'>
				<h3>Don't have an account?</h3>
				<Link to='/signup'>Signup</Link>		
				</div>
			</form>

			</div>

			{errorMessage && <h5>{errorMessage}</h5>}

		
		</>
	)
}