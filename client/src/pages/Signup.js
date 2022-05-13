import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


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
			<h1>Signup</h1>
			<form onSubmit={handleSubmit}>

				<label htmlFor="email">Email: </label>
				<input type="text" value={email} onChange={handleEmail} />

				<label htmlFor="password">Password: </label>
				<input type="password" value={password} onChange={handlePassword} />

				<label htmlFor="name">Name: </label>
				<input type="text" value={name} onChange={handleName} />

				<label htmlFor="street">Street: </label>
				<input type="text" value={street} onChange={handleStreet} />

				<label htmlFor="streetNumber">Number: </label>
				<input type="number" value={streetNumber} onChange={handleStreetNumber} />

				<button type="submit">Sign Up</button>
			</form>

			{errorMessage && <h5>{errorMessage}</h5>}

			<h3>Already have an account?</h3>
			<Link to='/login'>Login</Link>
		</>
	)
}