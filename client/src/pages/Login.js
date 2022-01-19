import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogInUser } from '../services/Auth'
import logo from '../assets/drby.svg'
import styled from 'styled-components'

export default function Login(props) {
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const payload = await LogInUser(formValues)
    // reset form
    setFormValues({ email: '', password: '' })
    // take payload, update user state
    props.setUser(payload)
    // set user, toggle authenticated true
    props.toggleAuthenticated(true)
    // redirect to home page
    navigate('/home')
  }

  return (
    <Wrapper>
      <div className='login-page'>
        <div className='login-icon'>
          <img src={logo} alt="drby" />
        </div>
        <form className='login-form' onSubmit={handleSubmit}>
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
          <button disabled={!formValues.email || !formValues.password}>
            Log In
          </button>
          <button onClick={ () => {navigate('/register')} }>
            Register
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
`
