import React from 'react'

const DestCard = ({dest}) => {
  return (
    <div className='flex flex-col items-center border m-5 w-[600px]'>
        <h1>{dest.name}</h1>
        <img src={dest.imageURL}/>
        <p>International: {dest.international ? "True" : "False"}</p>
        <p>{dest.notes}</p>
    </div>
  )
}

export default DestCard