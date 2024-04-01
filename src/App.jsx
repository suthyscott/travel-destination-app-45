import "./App.css"
import DestinationDisplay from "./DestinationDisplay"
import AddDest from "./AddDest"
import {Routes, Route} from 'react-router-dom'
import Header from "./Header"


function App() {
    
    return (
        <div className="w-full flex justify-between">
            <Header/>
            <Routes>
                <Route index element={<DestinationDisplay/>}/>
                <Route path="addDestination" element={<AddDest/>}/>
                {/* <Route path="/destDetails/:id" element={}/> */}
            </Routes>
        </div>
    )
}

export default App
