
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import Todo from './Todo'
import data from './API/data';

function App() {
  let [text, settext]= useState('pkr')
  let [currency, setcurrency]=useState('')
  let cdata=data(text)
    let kes= Object.keys(cdata)
    let val= Object.values(cdata)
  const change= ()=>{
    setcurrency(text)
  }
  //const [colors, setcolors]= useState('red')
// const [value, setvallue]= useState(null);
// const valuechange=()=>{
//   setvallue((prev)=> prev + 1)
//   setvallue((prev)=> prev + 1)
// }
// function chnageC(){
//   setcolors('green')
// }
// const [length, setlength]= useState(2)
// const [data, setdata]= useState(true)

// const refe= useRef()
// const passwordG= useCallback(()=>{
//   let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let pass= ''
//   if(data){
//    str=str + '!@#$%^&*()'
//   }


// let leng= str.length;

// for(let i =1 ; i<=length; i++)
// {
//   let char = Math.floor(Math.random()*leng + 1)
//   pass= pass + str.charAt(char);
// }
// settext(pass)
// refe.current?.select();
// window.navigator.clipboard.writeText(pass)
// },[length, text, data]) 
// useEffect(
//  ()=>{passwordG()}
//   ,[length])

let t='text-yellow-700';
  return (
    <div className={` ${t} bg-orange-100 h-screen`}>
      <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}} />
      <button onClick={change}>Change</button>
    {/* <Todo color={chnageC}/> */}
      {/* <p>{value}</p>
      <button onClick={valuechange}>Update</button> */}
      {/* <input type="text" ref={refe} value={text} onChange={(e)=>{settext(e.target.value)}} readOnly />
     <input value={length} type="range" max={15} min={1} onChange={(e)=>{setlength(e.target.value)}}/>
     <p>
      length={length}
      text={text}
     </p>
     <input type="checkbox" onChange={()=>{setdata((prev)=> !prev)} }/> */}
  {/* <Todo/> */}
  <select name="a" id="s">
  {kes.map((res)=>(
  
      <option key={res} value={res}>{res}</option>
    
  ))}
  </select>
  <select name="a" id="s">
  {val.map((res)=>(
  
      <option key={res} value={res}>{res}</option>
    
  ))}
  </select>
    </div>
  )
}

export default App
