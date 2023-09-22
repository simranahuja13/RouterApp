import React from 'react'
import { useParams } from 'react-router-dom';
const User = () => {
    const {userid} = useParams()

  return (
    <div className='bg-gray-700 p-4 text-3xl text-white text-center font-bold'> User : {userid} </div>
  )
}

export default User;