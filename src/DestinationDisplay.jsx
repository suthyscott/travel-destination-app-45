import React from 'react'
import DestCard from './DestCard'
import axios from "axios"
import { useState, useEffect } from "react"

const DestinationDisplay = () => {
  const [dests, setDests] = useState([])

    const getAllDestinations = async () => {
        let res = await axios.get(`http://localhost:4545/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
        setDests(res.data)

            // .then(res => {
            //     console.log(res.data)
            //     setDests(res.data)
            // })
    }

    useEffect(() => {
        getAllDestinations()
    }, [])

  return (
    <div className='w-1/2 p-14'>
      Destination Display
      {dests.map((dest) => {
        return <DestCard dest={dest} key={dest.id}/>
      })}
    </div>
  )
}

export default DestinationDisplay