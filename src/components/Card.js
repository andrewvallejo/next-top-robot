import React from "react"
import { Button } from './Button'
import bender from '../assets/bender.png'


export const Card = () => {
  return (
    <article className='card'>
      <h3>Bender</h3>
      <img className='robot-image' alt='Bender' src={bender} />
      <Button value='Vote' palette='primary'/>
    </article>
  )
}