import React, { useState } from 'react'

export default function Delete() {
    const [arr, setarr]= useState(['list1', 'list2', 'list3'])
    // const delete=(index)=>{
    //     setarr()
    // }
  return (
    <>
      {
        arr.map((value, index)=>(
            <div>
                <ul>
                    <li >{value}</li>
                    <button onClick={()=>{setarr(arr.filter((_,e)=>e!==index))}}>Delete</button>
                </ul>
                <span>

                    <div>Data</div>
                </span>
             </div>
            ) )}
    </>
  )
}
