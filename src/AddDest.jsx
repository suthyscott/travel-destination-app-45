import {useState} from 'react'
import axios from 'axios'

const AddDest = ({getAllDestinations}) => {
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [notes, setNotes] = useState('')
  const [international, setInternational] = useState(false)

  const handleAddDest = e => {
    e.preventDefault()

    const body = {
      name, 
      imageURL,
      notes,
      international
    }

    axios.post(`http://localhost:4545/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`, body)
      .then(res => {
        getAllDestinations()
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleAddDest} className='border flex flex-col m-auto'>
        <input placeholder='Destination Name' onChange={e => setName(e.target.value)} value={name}/>
        <input placeholder='Paste Image URL here' onChange={e => setImageURL(e.target.value)} value={imageURL}/>
        <input placeholder='Destination notes' onChange={e => setNotes(e.target.value)} value={notes}/>
        <input type='checkbox' checked={international} onChange={() => setInternational(!international)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddDest