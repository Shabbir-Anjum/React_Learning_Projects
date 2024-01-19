import React, { useEffect, useState } from "react";

export default function Todo() {
  let [data, setdata] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/pkr.json`)
      .then((res) => 
        res.json()
      )
      .then((res) => 
        setdata(res)
      );
  }, []);
  console.log(data);
  return (
    <div className={`max-w-full min-h-screen border-2 border-cyan-700 `}>
      {/* display{props.color}
      <button onClick={props.color}>button</button> */}
      Todo
    </div>
  );
}
