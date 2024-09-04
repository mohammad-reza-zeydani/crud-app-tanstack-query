import { createContext } from "react"
import { useState } from "react"
import Container from "./components/container"
import NavBar from "./components/navBar"
import AddUser from "./components/addUser"
import { Route , Routes } from "react-router-dom"
import { Tdata } from "./types/dataType"
import EditeUser from "./components/editeUser"
export const MyContext=createContext<any>(null)
function App() {
  const [editeData,setEditeData]=useState<Tdata>()
  return (
<MyContext.Provider value={{
  editeData,
  setEditeData
}}>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Container/>}/>
    <Route path="/addUser" element={<AddUser/>}/>
    <Route path="/editeUser" element={<EditeUser/>}/>
  </Routes>
</MyContext.Provider>
  )
}

export default App
