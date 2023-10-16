import React from 'react'
import {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
  const data=useLoaderData()
 //const [data, setdata]= useState({})
// useEffect(()=>{
// fetch('https://api.github.com/users/Shabbir-Anjum').then((res)=>res.json()).then((res)=> setdata(res))
// console.log('data')
// },[])
  return (
    <> 
    <div className=" w-screen h-full flex items-center justify-center overflow-hidden ">
      <div>
        <h1 className='font-bold text-red-700 text-4xl text-center p-5'>Name: <span className=' text-black'>{data.name}</span></h1>
        <img className='p-5' src={data.avatar_url} alt="" />
      </div>
    </div>
    </>
  )
}
export const GithubAPI= async ()=>{
const res= await fetch('https://api.github.com/users/Shabbir-Anjum')
return res.json()
}