import React, { useEffect, useState } from "react";

export default function Todo() {
  // let [data, setdata] = useState({});
  // let [color,setcolor]=useState('amber')
  let a = [12,45];
  let [text,settext]=useState('')
  // useEffect(() => {
  //   fetch(
  //     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/pkr.json`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => setdata(res));
  //   a.push(Object.keys(data))
  //   console.log(a);
  // }, []);

  console.log(a.push(text));
  return (
    <div style={{backgroundColor: color}} className={`max-w-full min-h-screen border-2 border-cyan-700 `}>
      {/* display{props.color}
      <button onClick={props.color}>button</button> */}
      Todo
      <button onClick={()=>setcolor('red')}>red</button>
      {a.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
      <input type="text" name="df" id="d" value={text} onChange={(e)=>{settext(e.target.value)}}/>
      {text}
      <button onClick={()=>a.push(text)}>add</button>
    </div>
  );
}
