import "./App.css"
import DestinationDisplay from "./DestinationDisplay"
import AddDest from "./AddDest"
import {Routes, Route} from 'react-router-dom'
import Header from "./Header"
import DestDetails from "./DestDetails"


function App() {
    
    return (
        <div>
            <Header/>
            <Routes>
                <Route index element={<DestinationDisplay/>}/>
                <Route path="addDestination" element={<AddDest/>}/>
                <Route path="/destDetails/:id" element={<DestDetails/>}/>
            </Routes>
        </div>
    )
}

export default App
