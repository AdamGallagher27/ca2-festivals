import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {


	const { id } = useParams()

	const [festival, setFestival] = useState(null)
	const FESTIVAL_API = `https://festivals-api.vercel.app/api/festivals/${id}`

	const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')

	useEffect(() => {
		getSelectedFestival()
	}, [id])


	const getSelectedFestival = () => {
		axios.get(FESTIVAL_API, {
			headers: {
				'Authorization' : `Bearer ${AUTH_TOKEN}`
			}
		})
			.then(response => {
				setFestival(response.data)
			})
			.catch(error => {
				console.error(error)
			})
	}

	if(!festival) return 'festival not found 1'

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