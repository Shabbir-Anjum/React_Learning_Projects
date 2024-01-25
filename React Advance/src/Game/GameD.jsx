import React, { useState } from 'react'

export default function GameD() {
    let game=['Footbal', 'Hockey', 'Cricket'];
    let day=['Monday', 'Sunday'];
    let [value1, setvalue1]= useState([])
    let [value2, setvalue2]= useState([])
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
        <div>
            <h1>Select Game</h1>
        </div>
    <div>
    {game.map((value, i)=>(
        <div>
            <input type="radio" value={value} onChange={(e)=>{setvalue1((prev)=>[...prev,e.target.value])}}/> {value}
        </div>
      ))}
    </div>
    <div>
        <h1>Select Day</h1>
    </div>
    <div>
    {day.map((value)=>(
        <div>
            <input type="radio" value={value} onChange={(e)=>{setvalue2((prev)=>[...prev,e.target.value])}} />{value}
        </div>
      ))}
    </div>
    <div>
        <h1>You Selected</h1>
        
            {value1.map((value)=>(
                <span>{value}, </span>
            ))}
            {value2.map((value)=>(
                <span>{value}, </span>
            ))}
    </div>
    </div>
  )
}
