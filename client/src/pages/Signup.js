import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Style/Stylesheets/Login.css';



export default function Signup() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);
	const [street, setStreet] = useState('');
	const [streetNumber, setStreetNumber] = useState(0);


	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password, name, street, streetNumber }
		axios.post('/api/auth/signup', requestBody)
			.then(response => {
				// redirect to login
				navigate('/login')
			})
			.catch(err => {
				const errorDescription = err.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handleName = e => setName(e.target.value)
	const handlePassword = e => setPassword(e.target.value)
	const handleStreet = e => setStreet(e.target.value)
	const handleStreetNumber = e => setStreetNumber(e.target.value)




	return (
		<>
			
			<div className='wrapper'>
			<div className='title'>
				Login form
				</div>
				<form onSubmit={handleSubmit}>


				<div className='field'>
				<input type="text" value={name} onChange={handleName} />

				<label htmlFor="name">Name: </label>
				</div>


				<div className='field'>
				<input type="text" value={email} onChange={handleEmail} />

				<label htmlFor="email">Email: </label>
				</div>

				<div className='field'>
				<input type="password" value={password} onChange={handlePassword} />

				<label htmlFor="password">Password: </label>
				</div>


				<div className='field'>
				<input type="text" value={street} onChange={handleStreet} />

				<label htmlFor="street">Street: </label>
				</div>

				<div className='field'>
				<input type="number" value={streetNumber} onChange={handleStreetNumber} />

				<label htmlFor="streetNumber">Number: </label>
				</div>

				<div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label htmlFor="remember-me">Remember me</label>
               </div>
				</div>
				<div className='field'>
				<button className="signupButton navi" type="submit">Sign Up</button>
				</div>

				<p>Already have an account?</p>
			<Link to='/login'>Login</Link>
				

			</form>
			</div>

			{errorMessage && <h5>{errorMessage}</h5>}

			


		</>
	)
}