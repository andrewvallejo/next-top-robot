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
      <form className='login-form'>
      
      </form>
        <div className='buttons-container'>
          <Button class='login' />
          <Button class='register' />
        </div>
      </article>
    </section>
  )
}