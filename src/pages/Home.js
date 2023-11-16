import React from 'react'
import LoginForm from '../components/LoginForm'
import NavBar from '../components/NavBar'

const Home = ({authenticated , onAuthenticated}) => {
  return (
    <div>
      <h1>Home</h1>
      {authenticated ? '' : (<LoginForm onAuthenticated={onAuthenticated}/>)  }
    </div>
  )
}

export default Home