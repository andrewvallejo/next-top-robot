import React, { useState, useContext } from 'react'
import FormData from 'form-data';
import { addRobot } from '../utility/apiCalls';
import { AuthContext } from '../utility/AuthContext';
import { Button } from './Button';
import icon from '../assets/upload.png';



export const RobotForm = () =>{ 
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const { state: { token } } = useContext(AuthContext)

  const handleFile = (event) => {
    event.preventDefault()
    if (event.target.name === 'name') {
      setName(event.target.value)
    } else {
      setImage(event.target.files[0])
    }
  }
  
  const handleUpload = async(event) => {
    event.preventDefault()
    if (name && image) {
      var formData = new FormData();
      formData.append('name', name);
      formData.append('image', image)
      addRobot(formData, token)
    }
  }

  const clearForm = () => {
    setName('')
    setImage('')
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
          Select image to upload
        </label>
        <input id='file' type='file' name='image' className='file-input' onChange={(e) => handleFile(e)} />
      </div>
      <div className='buttons-container'>
        <Button 
        code='create-valid'
        palette='tertiary'
        value='Clear'
        clear={clearForm}
        />
        <Button 
        code={name && image ? 'create-valid' : 'create-invalid'}
        type='submit'
        palette='primary'
        value='Add Robot' />
      </div>
    </form>
  )
}