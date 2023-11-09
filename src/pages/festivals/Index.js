import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Index = () => {

	const [festivals, setFestivals] = useState([])
	const FESTIVALS_API = 'https://festivals-api.vercel.app/api/festivals'

	useEffect(() => {
		getAllFestivals()
	}, [])

	const getAllFestivals = () => {
		axios.get(FESTIVALS_API)
			.then(response => {
				setFestivals(response.data)
				console.log(response.data)
			})
			.catch(error => {
				console.error(error)
			})
	}

	if (festivals.length === 0) return 'no festivals'

	const festivalList = festivals.map((festival, index) => {
		return (
			<div key={index}>
				<p>TITLE : <Link to={`/festivals/${festival._id}`}>{festival.title}</Link></p>
				<p>DESCRIPTION : {festival.description}</p>
			</div>
		)
	})

	return (
		<>
			<h2>all festivals</h2>
			{festivalList}
		</>
	)
}

export default Index