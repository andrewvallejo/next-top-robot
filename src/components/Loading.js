import React from 'react'
import logo from '../assets/mr-logo.png'


export const Loading = () => {
  return (
    <section className='load-container'> 
      <img alt='A logo of Mondo Robot' src={logo} className='logo'/>
    </section>
  )
}