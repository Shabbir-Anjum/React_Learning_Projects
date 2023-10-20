import { useContext, useState } from 'react'
import UserContext from './Context/Context'

function Login() {
    const[username, setusername]= useState("");
    const [password, setpassword] = useState('')
  const {setuser}= useContext(UserContext)

 const submit= (e)=>{
  e.preventDefault()
  setuser({username, password})
 }
  return (
    <>
  
  <div>
     <button onClick={submit}>Submit</button>
     </div>
    <input className='border-2 bg-slate-800 ' type='text' value={username} onChange={(e)=> setusername(e.target.value)}/>
     <div className='text-red-500'>----</div>
     <input className='border-2 bg-slate-800 ' type='text' value={password} onChange={(e)=> setpassword(e.target.value)}/>
 
    </>
  )
}

export default Login
