import React, { useState } from 'react'
import { Button } from './Button'
import logo from '../assets/mr-logo.png'

export const LoginPortal = ({login, error}) => {
  const [credentials, setCredentials] = useState({name: '', email: '', password: ''})

  const submitHandler = (event) => {
    event.preventDefault();
    login(credentials)
  }

  return (
    <section className='login-board'>
      <article className='portal'>
      <img alt='A logo of Mondo Robot' src={logo} className='logo'/>
      <form className='login-form' onSubmit={submitHandler}>
        {(!!error) ? (<div className='error'>{error}</div>) : ''}
        <div className='form-inputs'>
          <label htmlFor='name'>
            <fieldset className='input-label'>
              <legend className='input-name'>Full name</legend>
              <input 
              className='inner-input' 
              type='text' 
              name='name' 
              id='name' 
              value={credentials.name}
              onChange={e => setCredentials({...credentials, name: e.target.value })} />
            </fieldset>
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='email'>
            <fieldset className='input-label'>
              <legend className='input-name'>Email</legend>
              <input
              className='inner-input' 
              type='text' email='email' id='email' 
              value={credentials.email}
              onChange={e => setCredentials({...credentials, email: e.target.value })} 
              />
            </fieldset>
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='password'>
            <fieldset className='input-label'>
              <legend className='input-name'>Password</legend>
              <input type='password' password='password' id='password'
              className='inner-input' 
              autoComplete='on'
              value={credentials.password}
              onChange={e => setCredentials({...credentials, password: e.target.value })} /> 
            </fieldset>
          </label>
        </div>
        <div className='buttons-container'>
          <Button type='submit' value='Log In' palette='primary' />
          <Button value='Register' palette='secondary' />
        </div>

      </form>
      </article>
    </section>
  )
}