import React from 'react'

export default function FlagCard({name, image}) {
  return (
    <div className='flagCard'>
        <img src={image} alt={name}/>
        <h1>{name}</h1>
    </div>
  )
}
