import React, { useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import logo from '../assets/mr-logo.png'
import { authenticateUser, registerUser  } from '../utility/apiCalls/apiCalls';
import { AuthContext } from '../utility/apiCalls/AuthContext';
import { Button } from './Button'
import { Loading } from './Loading';


export const LoginPortal = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    authenticated: false,
    registered: false, 
    error: ''
  }
  
  const { dispatch } = useContext(AuthContext)
  const [credentials, setCredentials] = useState({ initialState })
  const isRegistration = (useLocation().pathname === '/registration')
  const history = useHistory();


  const handleInput = (event) => {
    event.preventDefault();
    setCredentials({...credentials, [event.target.name]: event.target.value })
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    return !credentials.registered && isRegistration ? handleRegistration(event) :  
    await authenticateUser(credentials)
    .then(({ token }) => {
      setCredentials({...credentials, authenticated: true, error: ''})
      setTimeout(() => {
        dispatch({type: 'LOGIN', info: token})
      }, 6000)
      history.push("/robots");
    })
    .catch(() => {
      event.preventDefault()
      setCredentials({...credentials, authenticated: false, error: 'Fill out the correct email and password'})
    }) 
  }

const handleRegistration = async(event) => {
  event.preventDefault();
  await registerUser(credentials)
  .then(() => {
    setCredentials({...credentials, registered: true, error: 'Registered!'})
    history.push("/login");
    })
  .catch(() => {
    event.preventDefault()
    setCredentials({...credentials, error: 'Fill out all required information'})
  }) 
}

  return (
    <>
    {(credentials.authenticated) ? (<Loading className='login-load'/>) :
    <section className='login-board'>
      <article className={`portal`}>
      <img alt='A logo of Mondo Robot' src={logo} className='logo'/>
      <form className='login-form' onSubmit={handleSubmit}>
        {(!!credentials.error) && (<div className='error'>{credentials.error}</div>)}
        {isRegistration && !credentials.registered &&
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
              onChange={(e) => handleInput(e)} />
            </fieldset>
          </label>
        </div>}
        <div className='form-inputs'>
          <label htmlFor='email'>
            <fieldset className='input-label'>
              <legend className='input-name'>Email</legend>
              <input
              className='inner-input' 
              type='text' name='email' id='email' 
              value={credentials.email || ''}
              onChange={(e) => handleInput(e)} 
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
              onChange={(e) => handleInput(e)} /> 
            </fieldset>
          </label>
        </div>
        <div className='buttons-container'>
          <Button disable={credentials.authenticated} 
          type='submit' 
          value={isRegistration && !credentials.registered ? 'Register' : 'Login'} 
          palette='primary' />
            <Button code='register' value={isRegistration ? 'Back to Login' : 'Register'} palette='secondary'/>
        </div>
      </form>
      </article>
    </section>
    }
    </>
  )
}