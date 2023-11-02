import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authservice from "./Appwrite/Auth"

function App() {
const [loading, setloading]= useState(true);
const dispatch= useDispatch()
useEffect(()=>{
  authservice.currentUser()
},[])
  return (
    <>
    vbvb
    </>
  )
}

export default App
