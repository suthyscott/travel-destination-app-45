import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const DestDetails = () => {
    const params = useParams()

    const [dest, setDest] = useState({})

    const getDestDeets = () => {
        axios
            .get(
                `http://localhost:4545/api/destination/${params.id}?apiKey=${
                    import.meta.env.VITE_APP_API_KEY
                }`
            )
            .then(res => {
                setDest(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDestDeets()
    }, [])

    console.log(dest)

    return (
        <div className="flex w-full p-[5%]">
            <img src={dest.imageURL} className="w-1/2"/>
            <div className="w-1/2 ml-[5%]">
                <h1 className="text-5xl">{dest.name}</h1>
                <p className="text-xl my-9">International: {dest.international ? "True" : "False"}</p>
                <p>{dest.notes}</p>
            </div>
        </div>
    )
}

export default DestDetails
