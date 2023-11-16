import { useState, useEffect } from "react"
import axios from "axios"

const LoginForm = ({onAuthenticated}) => {


  const [formData, setFormData] = useState({
    "email": "",
    "password": ""
  })

  const [errorMessage, setErrorMessage] = useState('')

  const LOGIN_END_POINT = 'https://festivals-api.vercel.app/api/users/login'

  const handleClick = (event) => {

    event.preventDefault()

    axios.post(LOGIN_END_POINT, formData)
      .then(response => {
        checkIsAuthenicated(response)
      })
      .catch(error => {        
        handleError(error)
      })
  }
  
  const checkIsAuthenicated = (response) => {
    if(response.status === 200){
      onAuthenticated(true, response.data.token)
    }
  }

  const handleError = (error) => {
    if(error.response.status === 401){
      setErrorMessage(error.response.data.message)
    }
  }

  const handleForm = (event => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  })

  return (
    <form onChange={handleForm}>
      email : <input type='text' name="email" value={formData.email}/>
      password : <input type='text' name="password" value={formData.password} />
      <button onClick={handleClick}>login</button>
      {errorMessage ? errorMessage : ''}
    </form>
  )
}

export default LoginForm