import React from 'react'
import Button from './Button';

const ButtonsList = () => {
  const list = ["All", "Movies", "Live", "Cricket", "Cooking", "Games","Entertainment","Trending","Podcasts"];
  return (
    <div className='flex'>
      {list.map((item, index) => (
      <Button key={index} name={item} />
    ))}
    </div>
  )
}

export default ButtonsList;