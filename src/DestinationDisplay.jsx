import React from 'react'
import DestCard from './DestCard'

const DestinationDisplay = ({dests}) => {

  return (
    <div className='w-1/2 p-14'>
      {dests.map((dest) => {
        return <DestCard dest={dest} key={dest.id}/>
      })}
    </div>
  )
}

export default DestinationDisplay