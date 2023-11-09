import React from 'react'

const LoginForm = () => {

  const handleClick = (event) => {
    console.log('clicked')
  }

  return (
    <form>
      email : <input type='text'/>
      password : <input type='text'/>

      <button onClick={handleClick}>login</button>
    </form>
  )
}

export default LoginForm