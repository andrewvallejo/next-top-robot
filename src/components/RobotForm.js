import React, { useState } from 'react'
import FormData from 'form-data';
import { addRobot } from '../utility/apiCalls';
import { Button } from './Button'


export const RobotForm = () =>{ 
  const initialState = {
    name: '',
    image: '',
  }

  const handleInput = (event) => {
    event.preventDefault();
    setRobot({...robot, [event.target.name]: event.target.value})
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    await addRobot(robot)
  }

  const [robot, setRobot] = useState({ initialState })

  return (
    <form className='robot-form ' onSubmit={handleSubmit}>
      <div className='form-inputs'>
        <h3>Add Robot</h3>
        <label htmlFor='robot-name' className='robot-label'>
          <fieldset className='input-label'>
            <legend className='input-name'>Name</legend>
            <input 
            className='inner-input' 
            type='text' 
            name='robot-name' 
            id='robot-name' 
            onChange={(e) => handleInput(e)} />
          </fieldset>
        </label>
      </div>

      <div className='buttons-container'>
      <Button 
      code='create'
      palette='tertiary'
      value='Clear'
       />
      <Button 
      disable='disable'
      palette='primary'
      code='create'
      value='Add Robot' />
      </div>
    </form>
  )
}