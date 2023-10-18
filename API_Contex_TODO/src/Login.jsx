import { useContext, useState } from 'react'
import UserContext from './Context/Context'

function Login() {
  const {setuser}= useContext(UserContext)
 const submit= (e)=>{
  e.PreventDefault()
  setuser({username, password})
 }
  return (
    <>
    <input value={username} onChange={(e)=> setuser(e.target.value)}/>
     <div className='text-red-500'>h</div>
     <input value={password} onChange={(e)=> setuser(e.target.value)}/>
     <button onClick={submit}>fddfd</button>
    </>
  )
}

export default Login
