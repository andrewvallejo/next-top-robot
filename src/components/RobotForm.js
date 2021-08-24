import React, { useState, useContext } from 'react'
import FormData from 'form-data';
import { AuthContext } from '../utility/AuthContext';
import { addRobot } from '../utility/apiCalls';
import { Button } from './Button'
import icon from '../assets/upload.png'

export const RobotForm = () =>{ 
  const initialState = {
    name: '',
    image: '',
    inserted: 'false'
  }

  const [robot, setRobot] = useState({ initialState })
  const { state: { token } } = useContext(AuthContext)

  const handleFile = (event) => {
    event.preventDefault()
    setRobot({...robot, [event.target.name]: event.target.value})
  }

  const handleUpload = async(event) => {
    event.preventDefault()
    if(robot.name && robot.image) {
      setRobot({...robot, inserted: true})
      const formData = new FormData()
      formData.append('name', robot.name)
      formData.append('image', robot.image)
      await addRobot(formData, token)}
    else {
      setRobot({...robot, inserted: false})
    }
  }


  const clearForm = () => {
    console.log(robot)
    setRobot({...robot, 
      name: '',
      image: '',
      inserted: false
    })
    
  }

  return (
    <form className='robot-form ' onSubmit={handleUpload}>
        <h3 className='form-title'>Add Robot</h3>
      <div className='form-inputs'>
        <label htmlFor='robot-name' className='robot-label'>
          <fieldset className='input-label'>
            <legend className='input-name'>Name</legend>
            <input 
            className='inner-input' 
            type='text' 
            name='name' 
            id='name' 
            onChange={(e) => handleFile(e)} />
          </fieldset>
        </label>
      </div>
      <div className='file-container'>
        <label htmlFor='file' className='file-label'>
        <img className='upload-icon' src={icon} alt='An upload icon' />
        Select image to upload</label>
        <input id='file' type='file' name='file' className='file-input' onChange={(e) => handleFile(e)} />

      </div>
      <div className='buttons-container'>
      <Button 
      code='create-valid'
      palette='tertiary'
      value='Clear'
      clear={clearForm}
       />
      <Button 
      code={robot.inserted ? 'create-valid' : 'create-invalid'}
      type='submit'
      palette='primary'
      value='Add Robot' />
      </div>
    </form>
  )
}