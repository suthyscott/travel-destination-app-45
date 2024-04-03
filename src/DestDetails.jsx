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

    return <div>
        {dest.name}
    </div>
}

export default DestDetails
