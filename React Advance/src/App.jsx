
import { useEffect, useState } from 'react'
import './App.css'
import Todo from './Todo'

function App() {
  //const [colors, setcolors]= useState('red')
// const [value, setvallue]= useState(null);
// const valuechange=()=>{
//   setvallue((prev)=> prev + 1)
//   setvallue((prev)=> prev + 1)
// }
// function chnageC(){
//   setcolors('green')
// }
const [length, setlength]= useState(9)
const [text, settext]= useState(' ')
const passwordG=()=>{
let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let char = Math.floor(Math.random()*str + 1)
settext(char)
}
useEffect(
 ()=>{passwordG()}
  ,[])
  return (
    <div>
    {/* <Todo color={chnageC}/> */}
      {/* <p>{value}</p>
      <button onClick={valuechange}>Update</button> */}
      <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}} readOnly />
     <input value={length} type="range" max={15} min={8} onChange={(e)=>{setlength(e.target.value)}}/>
     <p>
      length={length}
      text={text}
     </p>
    </div>
  )
}

export default App
