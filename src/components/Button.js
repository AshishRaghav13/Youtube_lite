import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
        <button className='px-10 py-2 mt-4 mx-2 bg-gray-200 text-black rounded-lg'>{name}</button>
    </div>
  )
}

export default Button;