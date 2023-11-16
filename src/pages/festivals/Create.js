import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const CREATE_API_ENDPOINT = 'https://festivals-api.vercel.app/api/festivals'
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    city: '',
    start_date: '',
    end_date: ''
  })

  const [errors, setErrors] = useState()

  const handleForm = (event => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  })

  // const isRequired = (fields) => {
  //   fields.forEach(field => {
  //     if (!formData[field]) {
  //       setErrors(() => ({
  //         ...errors,
  //         [field]: {
  //           message: `${field} is required`
  //         }
  //       }))
  //     }
  //   })
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   const token = localStorage.getItem('AUTH_TOKEN')

  //   isRequired(['title', 'description'])

  //   console.log(errors)


  //   if(!errors) {
  //     // createFestivalRequest(token)
  //     console.log('yes')
  //   }

  // }

  const createFestivalRequest = (token) => {
    axios.post(CREATE_API_ENDPOINT, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response)
        navigate('/festivals')
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <div>Create</div>
      <form onSubmit={handleSubmit}>
        <div>
          Title : <input type='text' name='title' value={formData.title} onChange={handleForm} />

        </div>
        <div>
          Description : <input type='text' name='description' value={formData.description} onChange={handleForm} />

        </div>
        <div>
          City : <input type='text' name='city' onChange={handleForm} value={formData.city} />

        </div>
        <div>
          Start Date : <input type='date' name='start_date' onChange={handleForm} value={formData.start_date} />
        </div>
        <div>
          End : Date <input type='date' name='end_date' onChange={handleForm} value={formData.end_date} />
        </div>
        <input type='submit' />
      </form>
    </>
  )
}

export default Create