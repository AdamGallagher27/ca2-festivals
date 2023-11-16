import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = ({authenticated, onAuthenticated}) => {

  const navigate = useNavigate()

  const logOut = () => {
    onAuthenticated(false)
    navigate('/')
  }

  return (
    <>
        <Link to='/'>Home</Link>
				<Link to='/festivals'>All Festivals</Link>
        {authenticated ? (<button onClick={logOut}>Log out</button>) : 'logged out'}
    </>
  )
}

export default NavBar