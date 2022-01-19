import e from 'cors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth';
import styled from 'styled-components'
import kirby from '../assets/kirby.gif'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function Register(props){
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/')
  }

    return (
      <Wrapper>
      <div className='login-page'>
        <div className='login-icon'>
          <img src={kirby} alt="Kirby" />
        </div>
          <form className='register-form' onSubmit={handleSubmit}>
            <div className='input-box'>
              <h2 className='first-name'>First Name </h2>
              <input
                onChange={handleChange}
                name='firstName'
                type='text'
                placeholder='Kirby'
                value={formValues.firstName}
                required
              />
            </div>
            <div className='input-box'>
              <h2 className='last-name'>Last Name</h2>
              <input
                onChange={handleChange}
                name='lastName'
                type='text'
                placeholder='Popopo'
                value={formValues.lastName}
                required
              />
            </div>
            <div className='input-box'>
              <h2 className='email'>Email</h2>
              <input
                onChange={handleChange}
                name='email'
                type='email'
                placeholder='kirby@email.com'
                value={formValues.email}
                required
                />
            </div>

            <div className='input-box'>
              <h2 className='password'>Password</h2>
              <input
                onChange={handleChange}
                name='password'
                type='password'
                value={formValues.password}
                required
              />
            </div>
            <div className='input-box'>
              <h2 className='confirm-password'>Confirm Password</h2>
              <input
                onChange={handleChange}
                name='confirmPassword'
                type='password'
                value={formValues.confirmPassword}
                required
              />
            </div>
            <button
              disabled={
                !formValues.firstName && !formValues.lastName && !formValues.email || (
                  !formValues.password &&
                  formValues.confirmPassword === formValues.password
                )
              }
            >
              Sign up
            </button>
          </form>
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-align: center;
`
