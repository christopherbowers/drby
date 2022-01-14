import React, { useState } from 'react';
import { LogInUser } from '../services/Auth';

export default function LogIn(props){
  const [formValues, setFormValues] = useState({ email: '', password: '' })
    
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = await LogInUser(formValues)
    // reset form
    setFormValues({ email: '', password: '' })
    // take payload, update user state
    props.setUser(payload)
    // set user, toggle authenticated true
    props.toggleAuthenticated(true)
    // redirect to home page
    props.history.push('/home')
  }

  return (
    <>
    <div className='login-page'>
     <div className='login-icon'>
        <img src='http://pa1.narvii.com/6623/76cf305f541645dcaa5c3482ce4448ab1ae227ae_00.gif' />
     </div>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='input-box'>
          <h2 className='email'>Email</h2>
           <input 
            onChange={handleChange}
            name='email'
            type='email'
            placeholder='name@email.com'
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
      </form>
    </div>
    </>
    )
}