import React from 'react'
import DestCard from './DestCard'

const DestinationDisplay = ({dests}) => {

  return (
    <div>
      {dests.map((dest) => {
        return <DestCard dest={dest} key={dest.id}/>
      })}
    </div>
  )
}

export default DestinationDisplay