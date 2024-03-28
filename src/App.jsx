import "./App.css"
import DestinationDisplay from "./DestinationDisplay"
import AddDest from "./AddDest"
import axios from "axios"
import { useState, useEffect } from "react"


function App() {
    const [dests, setDests] = useState([])

    const getAllDestinations = () => {
        axios.get(`http://localhost:4545/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
            .then(res => {
                console.log(res.data)
                setDests(res.data)
            })
    }

    useEffect(() => {
        getAllDestinations()
    }, [])
    

    return (
        <div className="w-full flex justify-between">
            <DestinationDisplay dests={dests}/>
            <AddDest getAllDestinations={getAllDestinations}/>
        </div>
    )
}

export default App
