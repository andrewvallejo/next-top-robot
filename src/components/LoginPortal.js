import React from 'react'
import { Button } from './Button'
import logo from '../assets/mr-logo.png'

export const LoginPortal = () => {

  return (
    <section className='login-board'>
      <article className='portal'>
      <img alt='A logo of Mondo Robot' src={logo} className='logo'/>
      <form className='login-form'>
        
      </form>
        <div className='buttons-container'>
          <Button />
          <Button class=''/>
        </div>
      </article>
    </section>
  )
}