import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {

	const { id } = useParams()

	const [festival, setFestival] = useState(null)
	const FESTIVAL_API = `https://festivals-api.vercel.app/api/festivals/${id}`

	useEffect(() => {
		getSelectedFestival()
	}, [id])
	

	const getSelectedFestival = () => {
		axios.get(FESTIVAL_API, {
			headers: {
				'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkYW1AZ21haWwuY29tIiwiZnVsbF9uYW1lIjoiYWRhbSBnYWxsYWdoZXIiLCJfaWQiOiI2NTRjYzg5ZDU2YTAxZTAwMDg4YTZhM2QiLCJpYXQiOjE2OTk1MzA5MzB9.5TzTY3WaYZ--QbAeisXQ-F1b2tjLZ_KbbEfM9BXhNF8'
			}
		})
			.then(response => {
				console.log(response.data)
				setFestival(response.data)
			})
			.catch(error => {
				console.error(error)
			})
	}

	if(!festival) return 'festival not found'

	return (
		<>
			<h2>show single festival</h2>
			<p>festival : {id}</p>
			<p>title : {festival.title}</p>
			<p>description : {festival.description}</p>
		</>
	)
}

export default Show