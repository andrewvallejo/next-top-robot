import React from 'react'
import logo from '../assets/mr-logo.png'


export const Loading = () => {
  return (
    <section className='load'> 
      <h2 className='website-title'>Next Top Robot</h2>
      <article className='box-covers' />
        <div className='box one'/>
        <div className='box two'/>
      <div/>
      <img alt='A logo of Mondo Robot' src={logo} className='logo'/>
      <article className='backdrop'/>
    </section>
  )
}