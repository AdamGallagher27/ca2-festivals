import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <Link to='/'>Home</Link>
				 - 
				<Link to='/festivals'>All Festivals</Link>
    </>
  )
}

export default NavBar