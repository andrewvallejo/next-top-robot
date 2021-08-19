import React from "react"
import bender from '../assets/bender.png'

export const Card = () => {
  return (
    <article className='card'>
      <h3>Bender</h3>
      <img className='robot-image' alt='Bender' src={bender} />
      <button>Vote</button>
    </article>
  )
}