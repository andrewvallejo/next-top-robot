import React, { useState, useContext } from 'react'
import { AuthContext } from '../utility/apiCalls/AuthContext';
import { Button } from './Button'
import logo from '../assets/mr-logo.png'
import { authenticateUser } from '../utility/apiCalls/apiCalls';


export const LoginPortal = () => {
  const { dispatch } = useContext(AuthContext)
  const initialState = {
    name: '',
    email: '',
    password: '',
    error: ''
  }

  const [credentials, setCredentials] = useState({ initialState })

  const handleInput = (event) => {
    event.preventDefault();
    setCredentials({...credentials, [event.target.name]: event.target.value })
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
     setCredentials({...credentials, error: ''})
    await authenticateUser(credentials.email, credentials.password)
    .then(({token}) => dispatch({type: 'LOGIN', info:{data: token, user: credentials.name}}))
      
  }

  return (
    <section className='login-board'>
      <article className='portal'>
      <img alt='A logo of Mondo Robot' src={logo} className='logo'/>
      <form className='login-form' onSubmit={handleSubmit}>
        {(!!credentials.error) && (<div className='error'>{credentials.error}</div>)}
        <div className='form-inputs'>
          <label htmlFor='name'>
            <fieldset className='input-label'>
              <legend className='input-name'>Full name</legend>
              <input 
              className='inner-input' 
              type='text' 
              name='name' 
              id='name' 
              value={credentials.name || ''}
              onChange={e => handleInput(e)} />
            </fieldset>
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='email'>
            <fieldset className='input-label'>
              <legend className='input-name'>Email</legend>
              <input
              className='inner-input' 
              type='text' name='email' id='email' 
              value={credentials.email || ''}
              onChange={e => handleInput(e)} 
              />
            </fieldset>
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='password'>
            <fieldset className='input-label'>
              <legend className='input-name'>Password</legend>
              <input type='password' name='password' id='password'
              className='inner-input' 
              autoComplete='on'
              value={credentials.password || ''}
              onChange={e => handleInput(e)} /> 
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