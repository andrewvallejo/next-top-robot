import React, { useState, useContext } from 'react'
import FormData from 'form-data';
import { AuthContext } from '../utility/AuthContext';
import { Card } from './Card'


export const AdminCard = () => {
  const { state: { token } } = useContext(AuthContext)
  const [uploaded, setUploaded] = useState(false)
  // const path = useLocation().pathname




    return (
      <>
        <Card  robotInfo='' totalVotes={[]}/>
      </>
    )
}