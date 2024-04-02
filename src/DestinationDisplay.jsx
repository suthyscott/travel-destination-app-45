import React from "react"
import DestCard from "./DestCard"
import axios from "axios"
import { useState, useEffect } from "react"

const DestinationDisplay = () => {
    const [dests, setDests] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getAllDestinations = async () => {
        let res = await axios.get(
            `http://localhost:4545/api/destinations?apiKey=${
                import.meta.env.VITE_APP_API_KEY
            }`
        )
        setDests(res.data)
    }

    useEffect(() => {
        getAllDestinations()
    }, [])

    return (
        <div className="w-full flex flex-col justify-center">
            <div className="flex justify-center my-5">
                <label>Search Destinations by name: </label>
                <input onChange={e => setSearchTerm(e.target.value)} className="border border-slate-500 rounded-md"/>
            </div>
            <div className="w-full flex flex-wrap justify-evenly">
                {dests
                    .filter(dest =>
                        dest.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    )
                    .map(dest => {
                        return <DestCard dest={dest} key={dest.id} />
                    })}
            </div>
        </div>
    )
}

export default DestinationDisplay
